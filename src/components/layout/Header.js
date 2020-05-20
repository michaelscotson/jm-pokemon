import React from "react";
import { Link } from "react-router-dom";

import jmLogo from "./Josephmark.png";
import ash from "./ash.png";

function Header() {
  return (
    <header style={headerStyle}>
      {/*Not sure if this is better as a div or image*/}
      <div style={jmLogoStyle}></div>
      <div>
        {/*fix positioning so it doesn't spread*/}
        <Link to="/" style={{ ...linkStyle, ...pokedexLinkStyle }}>
          POKEDEX
        </Link>
        {/*These should be opacity 0.6/1 based on the page selected*/}
        <Link to="/party" style={{ ...linkStyle, ...partyLinkStyle }}>
          PARTY
        </Link>
      </div>

      <svg
        style={circleStyle}
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill="#F4F4F4" />
      </svg>
      <div style={ashStyle}></div>
    </header>
  );
}

const circleStyle = {
  position: "absolute",
  width: "56px",
  height: "56px",
  right: "5%",
  top: "12px",
};

const ashStyle = {
  position: "absolute",
  width: "56px",
  height: "56px",
  right: "5%",
  top: "12px",
  background: `url(${ash})`,
  backgroundSize: "56px 56px",
};

const jmLogoStyle = {
  position: "absolute",
  width: "114px",
  height: "32px",
  left: "51px",
  top: "30px",
  background: `url(${jmLogo})`,
  backgroundSize: "114px 32px",
  fill: "100%",
};

const headerStyle = {
  position: "relative",
  width: "100%",
  height: "80px",
  left: "0px",
  top: "0px",

  background: "#333333",
};

const pokedexLinkStyle = {
  position: "absolute",
  right: "600px",
  top: "34px",
};

const partyLinkStyle = {
  position: "absolute",
  right: "500px",
  top: "34px",
};

const linkStyle = {
  position: "absolute",

  top: "34px",
  width: "65px",
  height: "13px",

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

export default Header;
