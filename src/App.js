import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokedex from "./components/Pokedex";
import PartyPage from "./components/PartyPage";
import "./App.css";
import axios from "axios";
import localStorage from "local-storage";
import pikachu from "./components/pikachu.png";
import { isMobileOnly } from "react-device-detect";

class App extends React.Component {
  /*
The state contains
 - pokemonList: The list of pokemon loaded from PokeAPI. An array of the
 pokemon JSON objects returned. An additional field (partyMember) is used to 
 track if the pokemon is a member of the user's party. The pokemon JSON 
 objects are primarily used by Pokemon.js to make the pokemon tiles used by 
 this app. 
 - numberReq: The number of pokemon requested from PokeAPI. 
  This is to ensure the same pokemon is not requested more than once. 
 - isMobile: true if isMobileOnly is true (from react-device-detect)
 -partyList: the pokemon in the user's party. Contains a copy of the pokemon JSON
 object in pokemonList. partyList is saved to and loaded from localstorage.

*/
  state = {
    pokemonList: [],
    numberReq: 0,
    isMobile: false,
    partyList: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    },
  };

  /* 
  Called when window is resized. Should be throttled.
  */
  handleWindowResize = () => {
    this.setState({ isMobile: isMobileOnly });
  };

  /* 
  Method for infinite scroll used. Max number of pokemon to request is
  151- the number of first generation pokemon. 
  */
  hasMore = () => {
    return this.numberReq < 151;
  };

  /* 
  Request pokemon from pokeapi (12 at a time) and save to state. This is
  called when app is intially loaded and by the infinite scroller 
  when the user scrolls to the bottom.
  */
  loadPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let i = this.state.numberReq + 1;
    let max = i + 12;

    while (i < max && i < 152) {
      axios.get(url + i.toString()).then((res) => {
        let newPokemon = res.data;

        //Set partyMember to true if pokemon already in list
        let slotNumber = 0;
        while (slotNumber < 6) {
          let pokemonInParty = this.state.partyList[slotNumber];
          if (pokemonInParty != null && newPokemon.id === pokemonInParty.id) {
            newPokemon.partyMember = true;
          }
          slotNumber += 1;
        }
        //Requests are async so may come in any order, so list must be sorted.
        //Sort is on pokemon number (id)
        let newPokemonList = [...this.state.pokemonList, newPokemon].sort(
          (a, b) => a.id - b.id
        );

        this.setState({
          pokemonList: newPokemonList,
        });
      });

      let newNumberReq = i;
      this.setState({
        numberReq: newNumberReq,
      });
      i = i + 1;
    }
  };

  /*
  Add an event listener to check for window resize, and
  then call the handleWindowResize method to check/set initial size.

  Read from localstorage to get the party list, set all party members to 
  null if nothing set. null means that slot is empty.

  Call loadPokemon to request the inital 12 pokemon from PokeAPI

  */
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);

    this.handleWindowResize();
    this.setState(
      {
        partyList: localStorage.get("partyList") || {
          0: null,
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
        },
      },
      () => {
        if (this.state.numberReq < 12) {
          this.loadPokemon();
        }
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledHandleWindowResize);
  }

  /* 
  Change the name of a pokemon in the party. Finds the slot number of pokemon
  in question, creates a copy of that pokemon, changes the name, then updates 
  state and localstorage.

  Pokemon in the partyList are deep copies of pokemon in pokedex (pokemonList)
  so name changes in party do not affect the pokedex.
  */

  changePokemonName = (e, pokemon) => {
    //find slotNumber
    let slotNumber = 0;
    while (slotNumber < 6) {
      let entry = this.state.partyList[slotNumber];
      if (entry != null && pokemon.id === entry.id) {
        break;
      }
      slotNumber += 1;
    }

    //Create a copy and change name
    let newPokemonCopy = JSON.parse(JSON.stringify(pokemon));
    newPokemonCopy.name = e.target.value;

    let newPartyList = {
      ...this.state.partyList,
      [slotNumber]: newPokemonCopy,
    };

    this.setState({
      partyList: newPartyList,
    });

    localStorage.set("partyList", newPartyList);
  };

  /* 
   Delete pokemon from the user's party. Finds the slot number of pokemon
  in question, and sets it to null (empty slot). Also sets partyMember
  flag in pokemonList (pokedex) to false for that pokemon (so it will 
  not be highlighted).

  Pokemon are not shuffled up to the top of the party. If, for example,
  the pokemon in slot 2 is deleted, the next pokemon added will go into
  slot 2 (not the last slot).

  State is updated for partyList and pokemonList, and partyList
  is saved to localstorage.

  */
  deletePokemon = (pokemonToDelete) => {
    let id = pokemonToDelete.id;
    let i = 0;
    while (i < 6) {
      let entry = this.state.partyList[i];
      if (entry != null && entry.id === id) {
        let newPartyList = { ...this.state.partyList, [i]: null };
        let newPokemonList = this.state.pokemonList.map((newPokemon) => {
          if (newPokemon.id === id) {
            newPokemon.partyMember = false;
          }
          return newPokemon;
        });
        this.setState({
          partyList: newPartyList,
          pokemonList: newPokemonList,
        });
        localStorage.set("partyList", newPartyList);
        return;
      }
      i = i + 1;
    }
  };

  /* Add pokemon to party. Party is first checked to see if there is an 
  empty (null) slot. Party is then checked to see if the pokemon already
  exists. 

  If not a copy is created (so the name in the party can be changed without 
  affecting the pokedex) and it is added to the partyList. The partyMember 
  flag in the pokemonList (pokedex) is also set to true so the pokemon can
  be highlighted in the pokedex. 

  The state is updated with the new pokemonList and partyList and the new 
  partyList is saved to localstorage. 
*/
  addToParty = (newPokemon) => {
    //If no null values, partyList is full, so return
    if (!Object.values(this.state.partyList).includes(null)) {
      return;
    }

    //check to see if it already exists
    //This could be done in one line as above...
    let i = 0;
    while (i < 6) {
      let entry = this.state.partyList[i];
      if (entry != null) {
        if (newPokemon.id === entry.id) {
          return;
        }
      }
      i += 1;
    }

    //Create a copy so name can be changed only in the partyList
    let newPokemonCopy = JSON.parse(JSON.stringify(newPokemon));
    newPokemonCopy.partyMember = true;

    //Once found add pokemon
    i = 0;
    while (i < 6) {
      let entry = this.state.partyList[i];

      if (entry === null) {
        let newPartyList = { ...this.state.partyList, [i]: newPokemonCopy };
        let newPokemonList = this.state.pokemonList.map((pokemon) => {
          if (pokemon.id === newPokemonCopy.id) {
            pokemon.partyMember = true;
          }
          return pokemon;
        });
        this.setState({
          partyList: newPartyList,
          pokemonList: newPokemonList,
        });

        localStorage.set("partyList", newPartyList);

        return;
      }
      i = i + 1;
    }
  };

  appStyle = (isMobile) => {
    if (!isMobile) {
      return {
        //position: "relative",

        //width: "100%",
        //minWidth: "1000px",
        background: "#F4F4F4",
        minWidth: "850px",
        float: "center",
        minHeight: "600px",
        height: "100vh",
      };
    }
    return {
      position: "relative",
      padding: "auto",
      width: "100%",
      background: "#F4F4F4",
      float: "center",
      height: "100vh",
      //background: "blue",
      //border: "solid",
      //borderColor: "blue",
    };
  };

  componentContainerStyle = (isMobile) => {
    if (!isMobile) {
      return {
        background: "#F4F4F4",
        margin: "auto",
      };
    }
    return {
      position: "relative",
      padding: "auto",
      background: "#F4F4F4",
      height: "100vh",
      //background: "orange",
      //border: "solid",
      //borderColor: "orange",
    };
  };

  backgroundImageStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: "10%",
        top: "8%",
        minHeight: "600px",
        height: "90%",
        opacity: "0.04",
        left: "30%",
        transform: "translateX(-30%)",
      };
    }
    return {
      position: "absolute",
      width: "100vw",
      top: "100px",
      left: "-50px",
      opacity: "0.04",
    };
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App" style={this.appStyle(this.state.isMobile)}>
          <Header isMobile={this.state.isMobile} />
          <div
            style={this.componentContainerStyle(this.state.isMobile)}
            className="container"
          >
            <img
              alt="Pikachu looking smug used as background for app"
              style={this.backgroundImageStyle(this.state.isMobile)}
              src={pikachu}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Pokedex
                    isMobile={this.state.isMobile}
                    loadPokemon={this.loadPokemon}
                    hasMore={this.hasMore}
                    pokemonList={this.state.pokemonList}
                    addToParty={this.addToParty}
                    deletePokemon={this.deletePokemon}
                    partyList={this.state.partyList}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/party"
              render={(props) => (
                <React.Fragment>
                  <PartyPage
                    isMobile={this.state.isMobile}
                    partyList={this.state.partyList}
                    deletePokemon={this.deletePokemon}
                    changePokemonName={this.changePokemonName}
                  />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
