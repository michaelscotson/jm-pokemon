import React, { Component } from "react";
import PropTypes from "prop-types";

export class Pokemon extends Component {
  pokemonLowerBoxStyle = () => {
    return {
      position: " absolute",
      left: "5%",
      right: "5%",
      top: " 31.41%",
      bottom: " -3.61%",

      background: "#red",
      boxSizing: " border-box",
      boxShadow:
        " 10px 10px 20px rgba(0, 0, 0, 0.05), -10px -10px 4px rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      zIndex: "-1",
      border: this.props.pokemon.party
        ? "4px solid rgba(16, 123, 106, 0.4)"
        : "2px solid #FFFFFF",
    };
  };

  render() {
    const { id, name, types, sprites, party } = this.props.pokemon;
    return (
      <div style={pokemonStyle} onClick={this.props.toggleParty.bind(this, id)}>
        <svg
          style={semicircleStyle}
          width="94"
          height="49"
          viewBox="0 0 94 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.03"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47 49C72.9574 49 94 27.9574 94 2C94 1.32997 93.986 0.663207 93.9582 0H0.0417849C0.0140208 0.663207 0 1.32997 0 2C0 27.9574 21.0426 49 47 49Z"
            fill="black"
          />
        </svg>

        <img src={sprites["front_default"]} style={pokemonImgStyle}></img>
        <div style={this.pokemonLowerBoxStyle()}></div>
        <div style={pokemonNumberBox}></div>
        <p style={pokemonNumberStyle}>
          #{id < 10 ? "00" : id < 100 ? "0" : ""}
          {id}
        </p>
        {/*Install moret font or find another similar*/}
        <p style={pokemonNameStyle}>{name}</p>
      </div>
    );
  }
}

const pokemonStyle = {
  position: "relative",
  width: "198px",
  height: "277px",
  float: "left",
  zIndex: "2",
};

const semicircleStyle = {
  position: "absolute",
  left: "26.26%",
  right: "26.26%",
  top: "31.41%",
  opacity: "1",
  zIndex: "2",
};

const pokemonImgStyle = {
  position: "absolute",
  left: "26.26%",
  right: "26.26%",
  bottom: "54.51%",
  zIndex: "4",
};

const pokemonNumberBox = {
  position: "absolute",
  left: " 35.1%",
  right: " 35.1%",
  top: " 54.15%",
  bottom: " 37.18%",

  background: "#333333",
  opacity: "0.1",
  borderRadius: "32px",
};

const pokemonNumberStyle = {
  position: "absolute",
  left: "42.665%",
  right: "42.665%",
  top: "55.96%",
  bottom: "38.99%",

  fontFamily: "'Work Sans', sans-serif",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "center",
  color: "#000000",

  opacity: "0.6",
};

const pokemonNameStyle = {
  position: "absolute",
  left: "2.02%",
  right: "2.53%",
  top: "67.87%",
  bottom: "18.77%",
  textTransform: "capitalize",
  fontFamily: "Moret, serif",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "32px",
  lineHeight: "37px",
  textAlign: "center",

  color: "#333333",
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
