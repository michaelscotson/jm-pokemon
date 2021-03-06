import React, { Component } from "react";
import pokeBall from "./pokeball.png";

/*
Generates images used for the party bar on the main (pokedex) page.

If the pokemon provided is null, a pokeball image is generated, 
otherwise an image of the pokemon is generated. 
*/
class PartyPreviewBar extends Component {
  generateParty(pokemon) {
    if (pokemon === null) {
      return pokeBall;
    } else {
      return pokemon.sprites["front_default"];
    }
  }

  partyimgStyle(pokemon, isMobile) {
    if (!isMobile) {
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
    if (pokemon === null) {
      return {
        width: "27px",
        height: "27px",
        opacity: "0.2",
        marginTop: "9px",
        marginBottom: "13.5px",
        marginLeft: "9px",
        marginRight: "9px",
        display: "inline-block",
        zIndex: "10",
      };
    } else {
      return {
        width: "45px",
        height: "45px",
        opacity: "0.6",

        marginBottom: "4.5px",
        display: "inline-block",
        zIndex: "10",
      };
    }
  }

  render() {
    return (
      <img
        alt=""
        style={this.partyimgStyle(this.props.pokemon, this.props.isMobile)}
        src={this.generateParty(this.props.pokemon)}
      />
    );
  }
}

export default PartyPreviewBar;
