import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

import arrow from "./arrow.png";
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

  navCircleStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        left: "0%",
        top: "70%",
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

  partyColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "55%",
        height: "90%",
        float: "left",
        maxWidth: "600px",
        overflowY: "auto",
      };
    }
    return {
      width: "300px",
      float: "left",
      display: "block",
    };
  };

  leftColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "10%",
        minWidth: "250px",
        height: "100%",
        float: "left",
        position: "sticky",
      };
    }
    return {
      width: "100%",
      height: "85px",
      position: "sticky",
      top: "0",
      opacity: "1",
      zindex: "100",
    };
  };

  rightColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "20%",
        maxWidth: "70px",
        top: "53px",
        height: "100%",
        float: "left",
        position: "sticky",
        marginLeft: "5%",
      };
    }
    return {};
  };

  rightColumnTextStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "144px",
        height: "72px",
        left: "30%",
        top: "25%",

        fontFamily: "Tinos",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        lineHeight: "100%",

        /* or 36px */

        color: "#333333",
      };
    }
    return {
      position: "absolute",
      width: "144px",
      height: "72px",
      left: "150px",
      top: "60px",
    };
  };

  leftColumnTextStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "144px",
        height: "72px",
        left: "30%",
        top: "25%",

        fontFamily: "Tinos",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        lineHeight: "100%",

        /* or 36px */

        color: "#333333",
      };
    }
    return {
      position: "absolute",
      width: "144px",
      height: "72px",
      left: "45px",
      top: "10px",

      fontFamily: "tinos",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "30px",
      lineHeight: "100%",

      /* or 36px */

      color: "#333333",
    };
  };

  container = (isMobile) => {
    if (!isMobile) {
      return {
        width: "100%",
        minWidth: "1200px",
        height: "90vh",
      };
    }
    return {
      width: "100%",
      height: "90vh",
      paddingBottom: "20px",
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

  getRightBar(isMobile, desktopPosition) {
    if ((isMobile && !desktopPosition) || (!isMobile && desktopPosition)) {
      return (
        <div style={this.rightColumnStyle(this.props.isMobile)}>
          <h2 style={this.rightColumnTextStyle(this.props.isMobile)}>
            {this.getPartyCount(this.props.partyList)}/6
          </h2>

          <Link to="/" style={this.navCircleStyle(this.props.isMobile)}>
            <div style={this.navCircleContent(this.props.isMobile)}>
              <h3 style={this.navLinkStyle(this.props.isMobile)}>Dex</h3>
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

  render() {
    return (
      <div style={this.container(this.props.isMobile)}>
        <div style={this.leftColumnStyle(this.props.isMobile)}>
          <h2 style={this.leftColumnTextStyle(this.props.isMobile)}>
            Ash's party
          </h2>
        </div>
        {this.getRightBar(this.props.isMobile, false)}
        <div style={this.partyColumnStyle(this.props.isMobile)}>
          {Object.keys(this.props.partyList).map((partyListKey, i) => (
            <div key={i + 100}>
              <Pokemon
                isMobile={this.props.isMobile}
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
        {this.getRightBar(this.props.isMobile, true)}
      </div>
    );
  }
}

PartyPage.propTypes = {
  partyList: PropTypes.object.isRequired,
};

export default PartyPage;
