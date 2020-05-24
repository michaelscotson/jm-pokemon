import React, { Component } from "react";

class PokedexLeft extends Component {
  leftColumnStyle = (isMobile) => {
    if (!isMobile) {
      return {
        width: "144px",
        minWidth: "144px",
        height: "550px",
        float: "left",
        position: "sticky",
        //background: "yellow",
        //border: "solid",
        //borderColor: "yellow",
        textAlign: "center",
        top: "0px",
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
  teamChooseStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "144px",
        height: "72px",
        //margin: "auto",
        marginTop: "130px",
        marginBottom: "0%",
        right: "0",
        textAlign: "center",

        //background: "blue",

        fontFamily: "tinos",
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
  scrollTipStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "60px",
        height: "38px",
        paddingLeft: "42px",
        paddingRight: "42px",

        //background: "grey",
        right: "0",
        //margin: "auto",
        marginTop: "300px",
        //marginBottom: "0%",

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
        </div>
      </React.Fragment>
    );
  }
}

export default PokedexLeft;
