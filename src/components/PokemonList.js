import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

class PokemonList extends Component {
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
            scrollThreshold={1}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {this.props.pokemonList.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                toggleParty={this.props.toggleParty}
              />
            ))}
          </InfiniteScroll>
          {/*<div>
              {this.props.pokemonList.map((pokemon) => (
                <Pokemon
                  key={pokemon.id}
                  pokemon={pokemon}
                  toggleParty={this.props.toggleParty}
                />
              ))}</div>*/}
          <div style={rightColumnStyle}>WAH WAH WAH</div>
        </div>
        <div style={loadedStyle}>
          <h1>{this.props.pokemonList.length}/151</h1>
        </div>
      </div>
    );
  }
}

const teamChooseStyle = {
  position: "absolute",
  width: "144px",
  height: "72px",
  left: "25%",
  top: "25%",

  fontFamily: "Moret",
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
  width: "20%", //FIND BETTER NUMBER!!!!!
  height: "100%",
  float: "left",
  position: "sticky",
  top: "0",
};

const pokemonColumnStyle = {
  width: "45%",
  height: "90%",
  float: "left",
  minWidth: "600px",
  overflowY: "hidden",
};

const rightColumnStyle = {
  width: "20%", //FIND BETTER NUMBER!!!!!
  height: "100%",
  float: "left",
  position: "sticky",
  top: "0",
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};

export default PokemonList;
