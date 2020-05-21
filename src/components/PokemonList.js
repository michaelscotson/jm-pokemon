import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PartyPokemon from "./PartyPokemon";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import navCircle from "./navCircle.png";

import { Link } from "react-router-dom";

class PokemonList extends Component {
  ignore = (pokemon) => {};
  render() {
    return (
      <div>
        <div style={container} id="scrollableDiv">
          <div style={leftColumnStyle}>
            <h1 style={teamChooseStyle}>Choose your team</h1>
          </div>
          <InfiniteScroll
            style={pokemonColumnStyle}
            dataLength={this.props.pokemonList.length}
            next={this.props.loadPokemon}
            hasMore={this.props.hasMore}
            scrollThreshold={0.98}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            children={this.props.pokemonList}
          >
            {this.props.pokemonList.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                addToParty={this.props.addToParty}
                deletePokemon={this.ignore}
                partyPagePokemon={false}
                changePokemonName={this.ignore}
              />
            ))}
          </InfiniteScroll>
          <div style={partyColumnStyle}>
            {Object.keys(this.props.partyList).map((partyListKey, i) => (
              <PartyPokemon
                key={i}
                pokemon={this.props.partyList[partyListKey]}
              />
            ))}
            <Link to="/party" style={navCircleStyle}>
              <div style={navCircleContent}>
                <h3 style={navLinkStyle}>Party</h3>
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
        <div style={loadedStyle}>
          <h1>{this.props.pokemonList.length}/151</h1>
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

const teamChooseStyle = {
  position: "absolute",
  width: "144px",
  height: "72px",
  left: "25%",
  top: "25%",

  fontFamily: "tinos",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "30px",
  lineHeight: "100%",

  /* or 36px */

  color: "#333333",
};

const loadedStyle = {
  height: "50px",
  textAlign: "center",
};

const container = {
  width: "100%",
  minWidth: "1200px", //FIND BETTER NUMBER!!!!!
  height: "80vh",
  overflowY: "auto",
};

const leftColumnStyle = {
  width: "25%", //FIND BETTER NUMBER!!!!!
  height: "100%",
  float: "left",
  position: "sticky",
  top: "0",
};

const pokemonColumnStyle = {
  width: "40%",
  height: "90%",
  float: "left",
  minWidth: "400px",
  overflowY: "hidden",
};

const partyColumnStyle = {
  width: "25%", //FIND BETTER NUMBER!!!!!
  top: "53px",
  height: "100%",
  float: "left",
  position: "sticky",
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  partyList: PropTypes.object.isRequired,
};

export default PokemonList;
