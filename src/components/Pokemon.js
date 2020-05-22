import React, { Component } from "react";
import PropTypes from "prop-types";

import pokeBall from "./pokeball.png";
import cross from "./cross.png";

class Pokemon extends Component {
  getPokemonName = (name, partyPagePokemon, isMobile) => {
    if (partyPagePokemon) {
      return (
        <input
          type="text"
          value={name}
          className="removeBorder"
          style={{
            ...this.inputResetStyle(this.props.isMobile),
            ...this.pokemonNameStyle(this.props.isMobile),
          }}
          onChange={(e) => this.props.changePokemonName(e, this.props.pokemon)}
        ></input>
      );
    }

    return <p style={this.pokemonNameStyle(this.props.isMobile)}>{name}</p>;
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

  deletePokemonStyle = (show, isMobile) => {
    if (!show) {
      return {
        display: "none",
      };
    }

    if (!isMobile) {
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
    }
    return {
      position: "absolute",
      bottom: "-7%",
      left: "67.5px",
      height: "15px",
      width: "15px",
      textAlign: "center",
      background: "#F8F8F8",
      border: "1px solid #FFFFFF",
      boxSizing: "border-box",
      borderRadius: "50%",

      boxShadow:
        "7.5px 7.5px 15px rgba(0, 0, 0, 0.05), -7.5px -7.5px 3px rgba(255, 255, 255, 0.2)",
    };
  };

  pokemonLowerBoxStyle = (highlighted, isMobile) => {
    if (!isMobile) {
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
    }
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
        " 7.5px 7.5px 15px rgba(0, 0, 0, 0.05), -7.5px -7.5px 3px rgba(255, 255, 255, 0.2)",
      borderRadius: "7.5px",
      zIndex: "-1",
      border: highlighted
        ? "3px solid rgba(16, 123, 106, 0.4)"
        : "1.5px solid #FFFFFF",
    };
  };

  pokemonStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "relative",
        width: "198px",
        height: "247px",
        marginTop: "20px",
        float: "left",
        zIndex: "2",
      };
    }
    return {
      position: "relative",
      width: "148px",
      height: "185px",
      marginTop: "0px",
      marginBottom: "10px",
      float: "left",
      zIndex: "2",
    };
  };

  pokeballImgStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: "26.26%",
        right: "26.26%",
        top: "14.0%",
        opacity: ".2",
        zIndex: "4",
        width: "98px",
        height: "98px",
      };
    }
    return {
      position: "absolute",
      left: "26.26%",
      right: "26.26%",
      top: "14.0%",
      opacity: ".2",
      zIndex: "4",
      width: "74px",
      height: "74px",
    };
  };

  plusCircleStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: "17%",
        bottom: "-10.0%",
      };
    }
    return { position: "absolute", left: "17%", bottom: "-10.0%" };
  };

  semicircleStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: "26.26%",
        right: "26.26%",
        top: "31.41%",
        opacity: "1",
        zIndex: "2",
      };
    }
    return {
      position: "absolute",
      left: "26.26%",
      right: "26.26%",
      top: "31.41%",
      opacity: "1",
      zIndex: "2",
    };
  };

  pokemonImgStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: "26.26%",
        right: "26.26%",
        bottom: "54.51%",
        zIndex: "4",
      };
    }
    return {
      position: "absolute",
      left: "26.26%",
      right: "26.26%",
      bottom: "50%",
      width: "72px",
      height: "72px",
      zIndex: "4",
    };
  };

  pokemonNumberBox = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: " 35.1%",
        right: " 35.1%",
        top: " 54.15%",
        bottom: " 37.18%",

        background: "#333333",
        opacity: "0.1",
        borderRadius: "32px",
      };
    }
    return {
      position: "absolute",
      left: " 35.1%",
      right: " 35.1%",
      top: " 54.15%",
      bottom: " 37.18%",

      background: "#333333",
      opacity: "0.1",
      borderRadius: "24px",
    };
  };

  pokemonNumberStyle = (isMobile) => {
    if (!isMobile) {
      return {
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
    }
    return {
      position: "absolute",
      left: "42.665%",
      right: "42.665%",
      top: "55.96%",
      bottom: "38.99%",

      fontFamily: "'Work Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "9px",
      lineHeight: "10.5px",
      textAlign: "center",
      color: "#000000",

      opacity: "0.6",
    };
  };

  pokemonTypeContainerStyle = (isMobile) => {
    if (!isMobile) {
      return {
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
    }
    return {
      display: "flex",
      position: "absolute",
      height: "7.5px",
      top: "86.28%",
      bottom: "5.78%",
      left: "17.175%",
      right: "17.175%",
      width: "97.5px",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    };
  };

  pokemonTypeStyle = (isMobile) => {
    if (!isMobile) {
      return {
        display: "flex",
        flexDirection: "row",
        padding: "0",
        height: "22px",
        width: "58px",
        borderRadius: "4px",
        margin: "0px 5px 0px 5px",

        textAlign: "center",
      };
    }
    return {
      display: "flex",
      flexDirection: "row",
      padding: "0",
      height: "16.5px",
      width: "44px",
      borderRadius: "3px",
      margin: "0px 3.75px 0px 3.75px",

      textAlign: "center",
    };
  };

  pokemonTypeTextStyle = (isMobile) => {
    if (!isMobile) {
      return {
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
    }
    return {
      textTransform: "capitalize",
      fontFamily: "Work Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "9px",
      lineHeight: "7.5px",
      color: "#FFFFFF",
      flex: "none",
      order: "0",
      alignSelf: "center",

      margin: "auto",

      textAlign: "center",
    };
  };

  inputResetStyle = (isMobile) => {
    if (!isMobile) {
      return {
        border: "none",
        display: "inline",
        padding: "none",
        margin: "0",
        marginRight: "15px",
        marginLeft: "10px",
        width: "172px",
        background: "transparent",
      };
    }
    return {
      border: "none",
      display: "inline",
      padding: "none",
      margin: "0",
      marginRight: "11.25px",
      marginLeft: "7.25px",
      width: "129px",
      background: "transparent",
    };
  };

  pokemonNameStyle = (isMobile) => {
    if (!isMobile) {
      return {
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
    }
    return {
      position: "absolute",
      left: "2.02%",
      right: "2.53%",
      top: "67.87%",
      bottom: "18.77%",
      textTransform: "capitalize",
      fontFamily: "Tinos, serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "27.75px",
      textAlign: "center",

      color: "#333333",
    };
  };

  crossStyle = (isMobile) => {
    if (!isMobile) {
      return {
        marginBottom: "4px",
      };
    }
    return {
      marginBottom: "5px",
    };
  };

  getSemiCircle = (isMobile) => {
    if (!isMobile) {
      return (
        <svg
          style={this.semicircleStyle(this.props.isMobile)}
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
      );
    }
    return (
      <svg
        style={this.semicircleStyle(this.props.isMobile)}
        width="73"
        height="39"
        viewBox="0 0 73 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.03"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.2254 38.3944C56.1504 38.3944 72.3029 22.242 72.3029 2.31695C72.3029 1.80263 72.2921 1.29082 72.2708 0.781738H0.180023C0.158712 1.29082 0.147949 1.80263 0.147949 2.31695C0.147949 22.242 16.3004 38.3944 36.2254 38.3944Z"
          fill="black"
        />
      </svg>
    );
  };

  getPlusCircle = (isMobile) => {
    if (!isMobile) {
      return (
        <svg
          style={this.plusCircleStyle(this.props.isMobile)}
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
      );
    }
    return (
      <svg
        style={this.plusCircleStyle(this.props.isMobile)}
        width="116"
        height="116"
        viewBox="0 0 116 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd)">
          <ellipse
            cx="52.0067"
            cy="51.8208"
            rx="28.785"
            ry="28.7852"
            transform="rotate(45 52.0067 51.8208)"
            fill="#F8F8F8"
          />
          <path
            d="M72.0893 71.9035C60.9979 82.9949 43.0152 82.995 31.9238 71.9036C20.8325 60.8123 20.8326 42.8296 31.924 31.7382C43.0154 20.6467 60.9982 20.6466 72.0895 31.738C83.1808 42.8293 83.1808 60.812 72.0893 71.9035Z"
            stroke="white"
            stroke-width="0.767606"
          />
        </g>
        <path
          d="M52.114 46.1455L52.1724 57.718M57.9294 51.961L46.3569 51.9025"
          stroke="#333333"
          strokeWidth="1.53521"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_dd"
            x="0.551921"
            y="0.366069"
            width="115.191"
            height="115.191"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="7.67606" dy="7.67606" />
            <feGaussianBlur stdDeviation="7.67606" />
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
            <feOffset dx="-7.67606" dy="-7.67606" />
            <feGaussianBlur stdDeviation="1.53521" />
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
    );
  };
  render() {
    if (this.props.pokemon == null) {
      return (
        <div style={this.pokemonStyle(this.props.isMobile)}>
          <img
            src={pokeBall}
            style={this.pokeballImgStyle(this.props.isMobile)}
            alt=""
          ></img>
          <div
            style={this.pokemonLowerBoxStyle(false, this.props.isMobile)}
          ></div>
          {this.getPlusCircle(this.props.isMobile)}
        </div>
      );
    }
    const { id, name, types, sprites, partyMember } = this.props.pokemon;
    return (
      <div
        style={this.pokemonStyle(this.props.isMobile)}
        className={
          this.props.partyPagePokemon ? "cursorDontChange" : "cursorChange"
        }
        onClick={
          this.props.partyPagePokemon
            ? null
            : this.props.addToParty.bind(this, this.props.pokemon)
        }
      >
        {this.getSemiCircle(this.props.isMobile)}

        <img
          alt={"Image of " + name}
          src={sprites["front_default"]}
          style={this.pokemonImgStyle(this.props.isMobile)}
        ></img>
        <div
          style={this.pokemonLowerBoxStyle(partyMember, this.props.isMobile)}
        ></div>
        <div style={this.pokemonNumberBox(this.props.isMobile)}></div>
        <p style={this.pokemonNumberStyle(this.props.isMobile)}>
          #{id < 10 ? "00" : id < 100 ? "0" : ""}
          {id}
        </p>
        {this.getPokemonName(
          name,
          this.props.partyPagePokemon,
          this.props.isMobile
        )}

        <div style={this.pokemonTypeContainerStyle(this.props.isMobile)}>
          {types.map((entry) => (
            <div
              key={entry["type"]["name"]}
              style={{
                ...this.pokemonTypeStyle(this.props.isMobile),
                ...this.getTypeColour(entry),
              }}
            >
              <p style={this.pokemonTypeTextStyle(this.props.isMobile)}>
                {entry["type"]["name"]}
              </p>
            </div>
          ))}
        </div>
        <div
          style={this.deletePokemonStyle(
            this.props.partyPagePokemon,
            this.props.isMobile
          )}
          onClick={
            this.props.partyPagePokemon
              ? this.props.deletePokemon.bind(this, this.props.pokemon)
              : null
          }
          className="cursorChange"
        >
          <img
            alt="delete pokemon"
            style={this.crossStyle(this.props.isMobile)}
            src={cross}
          />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  partyPagePokemon: PropTypes.bool.isRequired,
};

export default Pokemon;
