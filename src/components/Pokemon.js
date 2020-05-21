import React, { Component } from "react";
import PropTypes from "prop-types";

import pokeBall from "./pokeball.png";
import cross from "./cross.png";

class Pokemon extends Component {
  getPokemonName = (name, partyPagePokemon) => {
    if (partyPagePokemon) {
      return (
        <input
          type="text"
          value={name}
          className="removeBorder"
          style={{ ...inputResetStyle, ...pokemonNameStyle }}
          onChange={(e) => this.props.changePokemonName(e, this.props.pokemon)}
        ></input>
      );
    }

    return <p style={pokemonNameStyle}>{name}</p>;
  };

  getTypeColour = (entry) => {
    let type = entry["type"]["name"];
    let backgroundColor = "#000000";
    switch (type) {
      case "bug":
        backgroundColor = "#A8B820";
        break;
      case "dark":
        backgroundColor = "#705848";
        break;
      case "dragon":
        backgroundColor = "#7038F8";
        break;
      case "electric":
        backgroundColor = "#F8D030";
        break;

      case "fighting":
        backgroundColor = "#C03028";
        break;
      case "fire":
        backgroundColor = "#F08030";
        break;
      case "flying":
        backgroundColor = "#A890F0";
        break;
      case "ghost":
        backgroundColor = "#705898";
        break;
      case "grass":
        backgroundColor = "#78C850";
        break;
      case "ground":
        backgroundColor = "#E0C068";
        break;
      case "ice":
        backgroundColor = "#98D8D8";
        break;
      case "normal":
        backgroundColor = "#A8A878";
        break;
      case "poison":
        backgroundColor = "#A040A0";
        break;
      case "psychic":
        backgroundColor = "#F85888";
        break;
      case "rock":
        backgroundColor = "#B8A038";
        break;
      case "steel":
        backgroundColor = "#B8B8D0";
        break;
      case "water":
        backgroundColor = "#6890F0";
        break;
      case "fairy":
        backgroundColor = "#EE99AC";
        break;
      default:
        backgroundColor = "#000000";
        break;
    }

    return {
      background: backgroundColor,
    };
  };
  deletePokemon = (show) => {
    if (!show) {
      return {
        display: "none",
      };
    }
    return {
      position: "absolute",
      bottom: "-7%",
      left: "90px",
      height: "20px",
      width: "20px",
      textAlign: "center",
      background: "#F8F8F8",
      border: "1px solid #FFFFFF",
      boxSizing: "border-box",
      borderRadius: "50%",
      boxShadow:
        "10px 10px 20px rgba(0, 0, 0, 0.05), -10px -10px 4px rgba(255, 255, 255, 0.2)",
    };
  };

  pokemonLowerBoxStyle = (highlighted) => {
    return {
      position: " absolute",
      left: "5%",
      right: "5%",
      top: " 31.41%",
      bottom: " -3.61%",
      display: "flex",
      background: "#red",
      boxSizing: " border-box",
      boxShadow:
        " 10px 10px 20px rgba(0, 0, 0, 0.05), -10px -10px 4px rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      zIndex: "-1",
      border: highlighted
        ? "4px solid rgba(16, 123, 106, 0.4)"
        : "2px solid #FFFFFF",
    };
  };

  render() {
    if (this.props.pokemon == null) {
      return (
        <div style={pokemonStyle}>
          <img src={pokeBall} style={pokeballImgStyle} alt=""></img>
          <div style={this.pokemonLowerBoxStyle(false)}></div>
          <svg
            style={plusCircleStyle}
            width="152"
            height="151"
            viewBox="0 0 152 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd)">
              <circle
                cx="67.9998"
                cy="67.033"
                r="37.5"
                transform="rotate(45 67.9998 67.033)"
                fill="#F8F8F8"
              />
              <circle
                cx="67.9998"
                cy="67.033"
                r="37"
                transform="rotate(45 67.9998 67.033)"
                stroke="white"
              />
            </g>
            <path
              d="M67.9998 59.8928V75.1072M75.6069 67.5H60.3926"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_dd"
                x="0.966736"
                y="0"
                width="150.066"
                height="150.066"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="10" dy="10" />
                <feGaussianBlur stdDeviation="10" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="-10" dy="-10" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow"
                  result="effect2_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      );
    }
    const { id, name, types, sprites, partyMember } = this.props.pokemon;
    return (
      <div
        style={pokemonStyle}
        className="cursorChange"
        onClick={this.props.addToParty.bind(this, this.props.pokemon)}
      >
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

        <img
          alt={"Image of " + name}
          src={sprites["front_default"]}
          style={pokemonImgStyle}
        ></img>
        <div style={this.pokemonLowerBoxStyle(partyMember)}></div>
        <div style={pokemonNumberBox}></div>
        <p style={pokemonNumberStyle}>
          #{id < 10 ? "00" : id < 100 ? "0" : ""}
          {id}
        </p>
        {this.getPokemonName(name, this.props.partyPagePokemon)}

        <div style={pokemonTypeContainerStyle}>
          {types.map((entry) => (
            <div
              key={entry["type"]["name"]}
              style={{ ...pokemonTypeStyle, ...this.getTypeColour(entry) }}
            >
              <p style={pokemonTypeTextStyle}>{entry["type"]["name"]}</p>
            </div>
          ))}
        </div>
        <div
          style={this.deletePokemon(this.props.partyPagePokemon)}
          onClick={this.props.deletePokemon.bind(this, this.props.pokemon)}
          className="cursorChange"
        >
          <img alt="delete pokemon" style={crossStyle} src={cross} />
        </div>
      </div>
    );
  }
}

const crossStyle = {
  marginBottom: "4px",
};

const plusCircleStyle = {
  position: "absolute",
  left: "17%",
  bottom: "-10.0%",
};

const pokemonTypeTextStyle = {
  textTransform: "capitalize",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "10px",
  color: "#FFFFFF",
  flex: "none",
  order: "0",
  alignSelf: "center",

  margin: "auto",

  textAlign: "center",
};

const pokemonTypeStyle = {
  display: "flex",
  flexDirection: "row",
  padding: "0",
  height: "22px",
  width: "58px",
  borderRadius: "4px",
  margin: "0px 5px 0px 5px",

  textAlign: "center",
};

const pokemonTypeContainerStyle = {
  display: "flex",
  position: "absolute",
  height: "10px",
  top: "86.28%",
  bottom: "5.78%",
  left: "17.175%",
  right: "17.175%",
  width: "130px",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
};

const pokemonStyle = {
  position: "relative",
  width: "198px",
  height: "247px",
  marginTop: "20px",
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

const pokeballImgStyle = {
  position: "absolute",
  left: "26.26%",
  right: "26.26%",
  top: "14.0%",
  opacity: ".2",
  zIndex: "4",
  width: "98px",
  height: "98px",
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

const inputResetStyle = {
  border: "none",
  display: "inline",
  padding: "none",
  margin: "0",
  marginRight: "15px",
  marginLeft: "10px",
  width: "172px",
  background: "transparent",
};

const pokemonNameStyle = {
  position: "absolute",
  left: "2.02%",
  right: "2.53%",
  top: "67.87%",
  bottom: "18.77%",
  textTransform: "capitalize",
  fontFamily: "Tinos, serif",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "32px",
  lineHeight: "37px",
  textAlign: "center",

  color: "#333333",
};

Pokemon.propTypes = {
  partyPagePokemon: PropTypes.bool.isRequired,
};

export default Pokemon;
