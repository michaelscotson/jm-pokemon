import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import more_arrow from "./more_arrow.svg";
import "./App.css";

class App extends React.Component {
  state = {
    pokemonList: [
      {
        id: 1,
        name: "Bulbasaur",
        types: [{ type: "poison" }, { type: "grass" }],
        img: "../img/Bulbasaur.png",
        party: true,
      },
      {
        id: 2,
        name: "Ivysaur",
        types: [{ type: "poison" }, { type: "grass" }],
        img: "../img/Ivysaur.png",
        party: false,
      },
      {
        id: 3,
        name: "Venusaur",
        types: [{ type: "poison" }, { type: "grass" }],
        img: "../img/Venusaur.png",
        party: false,
      },
      {
        id: 4,
        name: "Charmander",
        types: [{ type: "Fire" }],
        img: "../img/Charmander.png",
        party: false,
      },
      {
        id: 5,
        name: "Charmeleon",
        types: [{ type: "Fire" }],
        img: "../img/Charmeleon.png",
        party: false,
      },
      {
        id: 6,
        name: "Charizard",
        types: [{ type: "Fire" }, { type: "Flying" }],
        img: "../img/Charizard.png",
        party: true,
      },
    ],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" style={containerStyle}>
            <Header />
            <PokemonList pokemonList={this.state.pokemonList} />
          </div>
        </div>
      </Router>
    );
  }
}

const containerStyle = {
  position: "relative",
  width: "1440px",
  height: "1024px",

  background: "#F4F4F4",
};

export default App;
