import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import jmLogo from "./Josephmark.png";
import ash from "./ash.png";

class Header extends Component {
  getOpacity = (linkLocation) => {
    let currentLocation = this.props.location.pathname;
    if (currentLocation === linkLocation) {
      return {
        opacity: "1",
      };
    }
    return {
      opacity: "0.6",
    };
  };

  circleStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "56px",
        height: "56px",
        top: "12px",
        right: "5%",
      };
    }
    return {
      display: "none",
    };
  };

  ashStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "56px",
        height: "56px",
        top: "12px",
        background: `url(${ash})`,
        backgroundSize: "56px 56px",
        right: "5%",
      };
    }
    return {
      display: "none",
    };
  };

  jmLogoStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "114px",
        height: "32px",
        left: "51px",
        top: "30px",
        background: `url(${jmLogo})`,
        backgroundSize: "114px 32px",
        fill: "100%",
      };
    }
    return {
      position: "absolute",
      width: "99px",
      height: "28px",
      left: "29px",
      top: "5px",
      background: `url(${jmLogo})`,
      backgroundSize: "99px 28px",
      fill: "100%",
    };
  };

  pokedexLinkStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",

        top: "34px",
        width: "65px",
        height: "13px",
        right: "60%",

        fontFamily: "Work Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "13px",
        lineHeight: "100%",
        textDecoration: "none",

        /* identical to box height', or 13px */
        letterSpacing: "0.04em",
        textTransform: "uppercase",

        color: "#FFFFFF",
      };
    }
    return {
      display: "none",
    };
  };

  headerContent = (isMobile) => {
    if (!isMobile) {
      return {
        maxWidth: "1200px",
        margin: "auto",
      };
    }
    return {};
  };

  rightHeaderContentStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",
        width: "400px",
        right: "0%",
        height: "100%",
      };
    }
    return {
      display: "none",
    };
  };

  partyLinkStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "absolute",

        top: "34px",
        width: "65px",
        height: "13px",
        right: "30%",

        fontFamily: "Work Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "13px",
        lineHeight: "100%",
        textDecoration: "none",

        /* identical to box height', or 13px */
        letterSpacing: "0.04em",
        textTransform: "uppercase",

        color: "#FFFFFF",
      };
    }
    return {
      display: "none",
    };
  };

  navPopupStyle = (isMobile) => {
    if (!isMobile) {
      return {
        display: "none",
      };
    }
    return {
      position: "relative",
      width: "31px",
      height: "31px",
      float: "right",
      marginRight: "30px",
      color: "white",
      display: "none",
    };
  };

  headerStyle = (isMobile) => {
    if (!isMobile) {
      return {
        position: "relative",
        width: "100%",
        height: "80px",
        left: "0px",
        top: "0px",
        background: "#333333",
      };
    }
    return {
      position: "relative",
      width: "100%",
      height: "34px",
      left: "0px",
      top: "0px",
      minWidth: "200px",
      background: "#333333",
    };
  };

  render() {
    return (
      <header style={this.headerStyle(this.props.isMobile)}>
        <div style={this.jmLogoStyle(this.props.isMobile)}></div>
        <div style={this.navPopupStyle(this.props.isMobile)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            role="img"
            focusable="false"
          >
            <title>Menu</title>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M4 7h22M4 15h22M4 23h22"
            ></path>
          </svg>
        </div>
        <div style={this.rightHeaderContentStyle(this.props.isMobile)}>
          <Link
            to=""
            style={{
              ...this.pokedexLinkStyle(this.props.isMobile),
              ...this.getOpacity("/"),
            }}
          >
            POKEDEX
          </Link>
          <Link
            to="party"
            style={{
              ...this.partyLinkStyle(this.props.isMobile),
              ...this.getOpacity("/party"),
            }}
          >
            PARTY
          </Link>

          <svg
            style={this.circleStyle(this.props.isMobile)}
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="#F4F4F4" />
          </svg>
          <div style={this.ashStyle(this.props.isMobile)}></div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
