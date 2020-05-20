import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class PartyPage extends Component {
  getPartyNumber(partyList) {
    let i = 0;
    Object.keys(partyList).forEach((key, index) => {
      if (partyList[key] != null) {
        i = i + 1;
      }
    });

    return i;
  }
  ignore = (pokemon) => {};
  render() {
    return (
      <div style={container}>
        <div style={leftColumnStyle}>
          <h2 style={columnTextStyle}>Ash's party</h2>
        </div>
        <div style={partyColumnStyle}>
          {Object.keys(this.props.partyList).map((partyKey, i) => (
            <div key={i + 100}>
              <Pokemon
                key={i}
                pokemon={this.props.partyList[partyKey]}
                partyPokemon={true}
                addToParty={this.ignore}
                deletePokemon={this.props.deletePokemon}
              />
            </div>
          ))}
        </div>
        <div style={rightColumnStyle}>
          <h2 style={columnTextStyle}>
            {this.getPartyNumber(this.props.partyList)}/6
          </h2>
        </div>
      </div>
    );
  }
}

const partyColumnStyle = {
  width: "50%",
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
  width: "25%",
  height: "100%",
  float: "left",
  position: "sticky",
};

const columnTextStyle = {
  position: "absolute",
  width: "144px",
  height: "72px",
  left: "35%",
  top: "39%",

  fontFamily: "Moret",
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
