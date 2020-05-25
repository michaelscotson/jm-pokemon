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

  pokedexContainerStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "relative",
        height: "80vh",
        overflowY: "auto",
        margin: "auto",
        float: "center",
        minWidth: "850px",
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
        maxWidth: "600px",

        height: "90%",
        float: "left",
        minWidth: "600px",
        overflowY: "hidden",

        margin: "auto",
      };
    }
    return {
      minWidth: "300px",
      maxWidth: "300px",
      overflowY: "hidden",
      display: "block",
      margin: "auto",
      paddingBottom: "150px",
    };
  };

  partyColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "60px",
        height: "100%",
        float: "left",
        position: "sticky",
        paddingTop: "50px",

        top: "0px",
      };
    }
    return {
      width: "270px",
      height: "50px",
      position: "sticky",
      top: "100px",
      paddingLeft: "15px",
      paddingRight: "15px",
      margin: "auto",
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
      left: "70%",
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

  /*
  isMobile: if the device is a mobile device
  destopPosition: specifies if the location function is called from is 
  the mobile postion (false) or desktop position (true)

  Returns JSX if the device and position match. 
  E.g. if a mobile device (isMobile === true) and 
  mobile position (desktopPosition === false) then it will return

  At the moment it is an XOR of the two parameters but it would probably be
  clearer if it was something like:

  getLeftBar(isMobile, mobilePosition) {
    if ((isMobile === mobilePosition) {}
  }
  

  */
  getLeftBar(isMobile, desktopPosition) {
    if ((isMobile && !desktopPosition) || (!isMobile && desktopPosition)) {
      return <PokedexLeft isMobile={this.props.isMobile} />;
    }
  }

  /*
  isMobile: if the device is a mobile device
  destopPosition: specifies if the location function is called from is 
  the mobile postion (false) or desktop position (true)

  Returns JSX if the device and position match. 
  E.g. if a mobile device (isMobile === true) and 
  mobile position (desktopPosition === false) then it will return

  At the moment it is an XOR of the two parameters but it would probably be
  clearer if it was something like:

  getPartyBar(isMobile, mobilePosition) {
    if ((isMobile === mobilePosition) {}
  }
    */
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
        margin: "auto",
      };
    }
    return {
      display: "none",
    };
  };

  pokedexMainContentStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "820px",
        left: "50%",
        transform: "translateX(-50%)",
      };
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.getLeftBar(this.props.isMobile, false)}
        {this.getPartyBar(this.props.isMobile, false)}

        <div
          style={this.pokedexContainerStyle(this.props.isMobile)}
          id="scrollableDiv"
        >
          <div style={this.pokedexMainContentStyle(this.props.isMobile)}>
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
