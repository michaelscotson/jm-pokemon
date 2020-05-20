import React, { Component } from "react";
import PropTypes from "prop-types";
import pokeBall from "./pokeball.png";

class PartyPokemon extends Component {
  generateParty(pokemon) {
    if (pokemon === null) {
      return pokeBall;
    } else {
      return pokemon.sprites["front_default"];
    }
  }

  partyimgStyle(pokemon) {
    if (pokemon === null) {
      return {
        width: "36px",
        height: "36px",
        opacity: "0.2",
        marginBottom: "30px",
        marginLeft: "12px",
        marginRight: "12px",
        display: "block",
        zIndex: "10",
      };
    } else {
      return {
        width: "60px",
        height: "60px",
        opacity: "0.6",
        marginBottom: "6px",
        display: "block",
        zIndex: "10",
      };
    }
  }

  render() {
    return (
      <img
        style={this.partyimgStyle(this.props.pokemon)}
        src={this.generateParty(this.props.pokemon)}
      />
    );
  }
}

const partyimgStyle = {};

export default PartyPokemon;
