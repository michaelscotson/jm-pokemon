import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PartyPreviewBar from "./PartyPreviewBar";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import PokedexLeft from "./PokedexLeft";
import { Link } from "react-router-dom";
import arrow from "./arrow.png";

class Pokedex extends Component {
  ignore = (pokemon) => {};

  container = (isMobile) => {
    if (!isMobile) {
      return {
        width: "100%",
        minWidth: "1000px",
        height: "80vh",
        overflowY: "auto",
      };
    }
    return {
      width: "100%",
      height: "90vh",
      overflowY: "auto",
      paddingBottom: "20px",
    };
  };

  pokemonColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "40%",
        height: "90%",
        float: "left",
        minWidth: "600px",
        overflowY: "hidden",
      };
    }
    return {
      width: "100%",
      float: "left",
      minWidth: "300px",
      maxWidth: "300px",
      overflowY: "hidden",
      display: "block",
    };
  };

  partyColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "60px",
        top: "60px",
        height: "100%",
        float: "left",
        position: "sticky",
        marginLeft: "5%",
      };
    }
    return {
      width: "100%",
      height: "50px",
      position: "sticky",
      top: "100px",
    };
  };

  navCircleStyle = (isMobile) => {
    if (!isMobile) {
      return {
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
    }
    return {
      position: "fixed",
      top: "50px",
      left: "220px",
      textDecoration: "none",
      display: "inline-block",
      justifyContent: "center",
      alignItems: "center",
      width: "45px",
      height: "45px",
      marginTop: "4.5px",
      borderRadius: "50%",
      background: "rgba(16, 123, 106, 0.6)",
      border: "1px solid #FFFFFF",
      boxSizing: "border-box",
      zindex: "10",
      boxShadow:
        "7.5px 7.5px 15px rgba(0, 0, 0, 0.05), -7.5px -7.5px 3px rgba(255, 255, 255, 0.2)",
    };
  };

  navCircleContent = (isMobile) => {
    if (!isMobile) {
      return {
        textAlign: "center",
        verticalAlign: "middle",
      };
    }
    return {
      textAlign: "center",
      verticalAlign: "middle",
    };
  };

  navLinkStyle = (isMobile) => {
    if (!isMobile) {
      return {
        fontFamily: "Tinos",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",

        color: "#FFFFFF",
      };
    }
    return {
      fontFamily: "Tinos",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "12px",
      paddingTop: "10px",
      paddingBottom: "-5px",
      color: "#FFFFFF",
    };
  };

  arrowImgStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "25.74px",
        height: "9.86px",
        display: "inline-block",
        marginBottom: "2px",
      };
    }
    return {
      width: "18.27px",
      height: "7px",
      display: "inline-block",
      marginBottom: "10px",
    };
  };

  getLeftBar(isMobile, desktopPosition) {
    if ((isMobile && !desktopPosition) || (!isMobile && desktopPosition)) {
      return <PokedexLeft isMobile={this.props.isMobile} />;
    }
  }

  getPartyBar(isMobile, desktopPosition) {
    if ((isMobile && !desktopPosition) || (!isMobile && desktopPosition)) {
      return (
        <div style={this.partyColumnStyle(this.props.isMobile)}>
          {Object.keys(this.props.partyList).map((partyListKey, i) => (
            <PartyPreviewBar
              key={i}
              isMobile={this.props.isMobile}
              pokemon={this.props.partyList[partyListKey]}
            />
          ))}
          <Link to="/party" style={this.navCircleStyle(this.props.isMobile)}>
            <div style={this.navCircleContent(this.props.isMobile)}>
              <h3 style={this.navLinkStyle(this.props.isMobile)}>Party</h3>
              <img
                alt=""
                style={this.arrowImgStyle(this.props.isMobile)}
                src={arrow}
              />
            </div>
          </Link>
        </div>
      );
    }
  }

  loadedStyle = (isMobile) => {
    if (!isMobile) {
      return {
        height: "50px",
        textAlign: "center",
        width: "1100px",
      };
    }
    return {
      display: "none",
    };
  };

  render() {
    return (
      <React.Fragment>
        {this.getLeftBar(this.props.isMobile, false)}
        {this.getPartyBar(this.props.isMobile, false)}

        <div style={this.container(this.props.isMobile)} id="scrollableDiv">
          {this.getLeftBar(this.props.isMobile, true)}
          <InfiniteScroll
            style={this.pokemonColumnStyle(this.props.isMobile)}
            dataLength={this.props.pokemonList.length}
            next={this.props.loadPokemon}
            hasMore={this.props.hasMore}
            scrollThreshold={0.98}
            scrollableTarget="scrollableDiv"
            children={this.props.pokemonList}
          >
            {this.props.pokemonList.map((pokemon) => (
              <Pokemon
                isMobile={this.props.isMobile}
                key={pokemon.id}
                pokemon={pokemon}
                addToParty={this.props.addToParty}
                deletePokemon={this.ignore}
                partyPagePokemon={false}
                changePokemonName={this.ignore}
              />
            ))}
          </InfiniteScroll>

          {this.getPartyBar(this.props.isMobile, true)}
        </div>
        <div style={this.loadedStyle(this.props.isMobile)}>
          <h1>{this.props.pokemonList.length}/151</h1>
        </div>
      </React.Fragment>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  partyList: PropTypes.object.isRequired,
};

export default Pokedex;
