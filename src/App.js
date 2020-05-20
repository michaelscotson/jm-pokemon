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
    party: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
    },
  };

  hasMore = () => {
    console.log(this.numberGot < 151);
    return this.numberReq < 151;
  };

  loadPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let i = this.state.numberReq + 1;
    let max = i + 12;

    while (i < max && i < 152) {
      console.log(i);
      axios.get(url + i.toString()).then((res) => {
        let newPokemonList = [...this.state.pokemonList, res.data].sort(
          (a, b) => a.id - b.id
        );
        let newNumberReq = this.state.numberReq;

        this.setState({
          pokemonList: newPokemonList,
          numberReq: newNumberReq,
        });

        localStorage.set("pokemonList", newPokemonList);
        localStorage.set("numberReq", newNumberReq);
      });
      let newNumberReq = i;

      this.setState({
        numberReq: newNumberReq,
      });
      localStorage.set("numberReq", newNumberReq);
      i = i + 1;
    }
  };

  componentDidMount() {
    this.setState(
      {
        pokemonList: localStorage.get("pokemonList") || [],
        numberReq: localStorage.get("numberReq") || 0,
        party: localStorage.get("party") || {
          1: null, //change to 0
          2: null,
          3: null,
          4: null,
          5: null,
          6: null,
        },
      },
      () => {
        if (this.state.numberReq < 12) {
          this.loadPokemon();
        }
      }
    );
  }

  deletePokemon = (pokemonToDelete) => {
    console.log("Clicked!");
    //If null found add pokemon, if id already exists, return
    let id = pokemonToDelete.id;
    let i = 1;
    while (i <= 6) {
      let entry = this.state.party[i];
      if (entry == null) {
        console.log(entry);
      } else if (entry.id === id) {
        let newParty = { ...this.state.party, [i]: null };
        let newPokemonList = this.state.pokemonList.map((pokemon) => {
          if (pokemon.id === id) {
            pokemon.party = false;
          }
          return pokemon;
        });
        this.setState({
          party: newParty,
          pokemonList: newPokemonList,
        });
        localStorage.set("party", newParty);
        localStorage.set("pokemonList", newPokemonList);
        return;
      }
      i = i + 1;
    }
  };

  addToParty = (newPartyMember) => {
    //If no null values, party is full, so return
    if (!Object.values(this.state.party).includes(null)) {
      return;
    }

    //check to see if it already exists
    let i = 1;
    while (i <= 6) {
      let entry = this.state.party[i];
      if (entry != null) {
        if (newPartyMember.id === entry.id) {
          return;
        }
      }
      i = i + 1;
    }

    //Create a copy so name can be changed only in the party
    let newPartyMemberCopy = JSON.parse(JSON.stringify(newPartyMember));

    //Once found add pokemon
    i = 1;
    while (i <= 6) {
      let entry = this.state.party[i];

      if (entry === null) {
        let newParty = { ...this.state.party, [i]: newPartyMemberCopy };
        let newPokemonList = this.state.pokemonList.map((pokemon) => {
          if (pokemon.id === newPartyMemberCopy.id) {
            pokemon.party = true;
          }
          return pokemon;
        });
        this.setState({
          party: newParty,
          pokemonList: newPokemonList,
        });

        localStorage.set("party", newParty);
        localStorage.set("pokemonList", newPokemonList);

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
                    party={this.state.party}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/party"
              render={(props) => (
                <React.Fragment>
                  <PartyPage
                    partyList={this.state.party}
                    deletePokemon={this.deletePokemon}
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
