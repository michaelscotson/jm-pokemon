import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import more_arrow from "./more_arrow.svg";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    pokemonList: [],
    numberReq: 0,
  };

  hasMore = () => {
    console.log(this.numberGot < 151);
    return this.numberReq < 151;
  };

  loadPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    //https://pokeapi.co/api/v2/pokemon/
    let i = this.state.numberReq + 1;
    let max = i + 12;

    while (i < max && i < 152) {
      console.log(i);
      axios.get(url + i.toString()).then((res) => {
        this.setState({
          pokemonList: [...this.state.pokemonList, res.data].sort(
            (a, b) => a.id - b.id
          ),
          numberReq: this.state.numberReq,
        });
      });
      this.setState({
        pokemonList: this.state.pokemonList,
        numberReq: i,
      });
      i = i + 1;
    }
  };

  componentDidMount() {
    this.loadPokemon();
  }

  toggleParty = (id) => {
    this.setState({
      pokemonList: this.state.pokemonList.map((pokemon) => {
        if (pokemon.id === id) {
          pokemon.party = !pokemon.party;
        }
        return pokemon;
      }),
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" style={containerStyle}>
            <Header />
            <PokemonList
              loadPokemon={this.loadPokemon}
              hasMore={this.hasMore}
              pokemonList={this.state.pokemonList}
              toggleParty={this.toggleParty}
            />
          </div>
        </div>
      </Router>
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
