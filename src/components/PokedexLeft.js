import React, { Component } from "react";
import scrollArrow from "./scrollArrow.png";

/*
Component for the left side of the pokedex. 
Should not really be it's own component since no other similar subsections 
of party or pokedex page are their own components.

*/
class PokedexLeft extends Component {
  leftColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "144px",
        minWidth: "144px",
        height: "550px",
        float: "left",
        position: "sticky",
        textAlign: "center",
        paddingRight: "44px",
        top: "0px",
      };
    }
    return {
      width: "300px",
      height: "85px",
      position: "sticky",
      top: "0",
      opacity: "1",
      zindex: "100",
      margin: "auto",
    };
  };
  teamChooseStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "144px",
        height: "72px",
        marginTop: "230px",
        marginBottom: "0%",
        right: "0",
        textAlign: "left",
        paddingRight: "44px",
        fontFamily: "tinos",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "33px",
        lineHeight: "100%",
        color: "#333333",
      };
    }
    return {
      position: "absolute",
      width: "144px",
      height: "72px",
      left: "20px",
      top: "10px",

      fontFamily: "tinos",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "33px",
      lineHeight: "100%",

      /* or 36px */

      color: "#333333",
    };
  };
  scrollTipStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "60px",
        height: "38px",

        left: "0",
        top: "360px",

        fontFamily: "tinos",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "100%",

        textAlign: "center",

        color: "#333333",

        opacity: "0.6",
      };
    }
    return {
      display: "none",
    };
  };

  scrollImageStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "18px",
        height: "28px",
        left: "21px",
        top: "397px",
      };
    }
    return {
      display: "none",
    };
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.leftColumnStyle(this.props.isMobile)}>
          <h1 style={this.teamChooseStyle(this.props.isMobile)}>
            Choose your team
          </h1>
          <h5 style={this.scrollTipStyle(this.props.isMobile)}>
            Scroll for more
          </h5>
          <img
            style={this.scrollImageStyle(this.props.isMobile)}
            src={scrollArrow}
            alt="scroll down arrow"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PokedexLeft;
