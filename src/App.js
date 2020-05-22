import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokedex from "./components/Pokedex";
import PartyPage from "./components/PartyPage";
import "./App.css";
import axios from "axios";
import localStorage from "local-storage";
import pikachu from "./components/pikachu.png";

class App extends React.Component {
  state = {
    pokemonList: [],
    numberReq: 0,
    partyList: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    },
    isMobile: false,
  };

  handleWindowResize = () => {
    console.log(window.innerWidth);
    this.setState({ isMobile: window.innerWidth < 800 });
  };

  hasMore = () => {
    return this.numberReq < 151;
  };

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

  deletePokemon = (pokemonToDelete) => {
    //If null found add pokemon, if id already exists, return
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

  addToParty = (newPokemon) => {
    //If no null values, partyList is full, so return
    if (!Object.values(this.state.partyList).includes(null)) {
      return;
    }

    //check to see if it already exists
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

  containerStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "relative",
        padding: "auto",
        width: "100%",
        minWidth: "1000px",
        background: "#F4F4F4",
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
    };
  };

  backgroundImageStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: "10%",
        top: "8%",
        width: "30%",
        height: "auto",
        opacity: "0.04",
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
        <div className="App">
          <div
            className="container"
            style={this.containerStyle(this.state.isMobile)}
          >
            <Header isMobile={this.state.isMobile} />
            <img
              alt=""
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
