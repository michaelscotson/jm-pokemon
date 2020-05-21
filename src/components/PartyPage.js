import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

class PartyPage extends Component {
  getPartyCount(partyList) {
    let count = 0;
    Object.keys(partyList).forEach((key, index) => {
      if (partyList[key] != null) {
        count += 1;
      }
    });

    return count;
  }
  ignore = (pokemon) => {};
  render() {
    return (
      <div style={container}>
        <div style={leftColumnStyle}>
          <h2 style={columnTextStyle}>Ash's party</h2>
        </div>
        <div style={partyColumnStyle}>
          {Object.keys(this.props.partyList).map((partyListKey, i) => (
            <div key={i + 100}>
              <Pokemon
                key={i}
                pokemon={this.props.partyList[partyListKey]}
                partyPagePokemon={true}
                addToParty={this.ignore}
                deletePokemon={this.props.deletePokemon}
                changePokemonName={this.props.changePokemonName}
              />
            </div>
          ))}
        </div>
        <div style={rightColumnStyle}>
          <h2 style={columnTextStyle}>
            {this.getPartyCount(this.props.partyList)}/6
          </h2>

          <Link to="/" style={navCircleStyle}>
            <div style={navCircleContent}>
              <h3 style={navLinkStyle}>Dex</h3>
              <svg
                width="27"
                height="10"
                viewBox="0 0 27 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.1108 4.20025L20.9538 1.0433L21.9938 0.0032959L26.4062 4.41564C26.6934 4.70283 26.6934 5.16846 26.4062 5.45564L21.9938 9.86799L20.9538 8.82799L24.1108 5.67103L0.883057 5.67104L0.883057 4.20026L24.1108 4.20025Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const navCircleContent = {
  textAlign: "center",
  verticalAlign: "middle",
};

const navLinkStyle = {
  fontFamily: "Tinos",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "16px",

  color: "#FFFFFF",
};

const navCircleStyle = {
  position: "absolute",
  left: "28%",
  top: "59%",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  marginTop: "6px",
  borderRadius: "50%",
  background: "rgba(16, 123, 106, 0.6)",
  border: "1px solid #FFFFFF",
  boxSizing: "border-box",
  boxShadow:
    "10px 10px 20px rgba(0, 0, 0, 0.05), -10px -10px 4px rgba(255, 255, 255, 0.2)",
};

const partyColumnStyle = {
  width: "40%",
  height: "90%",
  float: "left",
  minWidth: "400px",
  overflowY: "auto",
};

const leftColumnStyle = {
  width: "25%",
  height: "100%",
  float: "left",
  position: "sticky",
};

const rightColumnStyle = {
  width: "25%", //FIND BETTER NUMBER!!!!!
  top: "53px",
  height: "100%",
  float: "left",
  position: "sticky",
};

const columnTextStyle = {
  position: "absolute",
  width: "144px",
  height: "72px",
  left: "31%",
  top: "39%",

  fontFamily: "Tinos",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "30px",
  lineHeight: "100%",

  /* or 36px */

  color: "#333333",
};

const container = {
  width: "100%",
  minWidth: "1200px", //FIND BETTER NUMBER!!!!!
  height: "90vh",
};

PartyPage.propTypes = {
  partyList: PropTypes.object.isRequired,
};

export default PartyPage;
