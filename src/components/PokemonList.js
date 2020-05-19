import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class PokemonList extends Component {
  render() {
    return (
      <div style={container}>
        <div style={leftColumnStyle}></div>
        <div style={pokemonColumnStyle}>
          {this.props.pokemonList.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div style={rightColumnStyle}></div>
      </div>
    );
  }
}

const container = {
  width: "1440px",
  height: "1020px",
};

const leftColumnStyle = {
  width: "27.5%",
  height: "100%",
  float: "left",
};

const pokemonColumnStyle = {
  width: "45%",
  height: "100%",
  float: "left",
};

const rightColumnStyle = {
  width: "27.5%",
  height: "100%",
  float: "left",
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};

export default PokemonList;
