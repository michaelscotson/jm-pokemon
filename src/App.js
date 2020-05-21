import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import PartyPage from "./components/PartyPage";
import more_arrow from "./more_arrow.svg";
import "./App.css";
import axios from "axios";
import localStorage from "local-storage";

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
  };

  hasMore = () => {
    console.log(this.numberReq < 151);
    return this.numberReq < 151;
  };

  loadPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let i = this.state.numberReq + 1;
    let max = i + 12;

    while (i < max && i < 152) {
      console.log(i);
      axios.get(url + i.toString()).then((res) => {
        let newPokemon = res.data;

        //Check if new Pokemon is already in party
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

    console.log(slotNumber);

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
  };

  deletePokemon = (pokemonToDelete) => {
    console.log("Clicked!");
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

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container" style={containerStyle}>
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <PokemonList
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

const containerStyle = {
  position: "relative",
  margin: "auto",
  width: "100%",
  minWidth: "1000px",
  background: "#F4F4F4",
  float: "center",
};

export default App;
