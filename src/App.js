import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import more_arrow from "./more_arrow.svg";
import "./App.css";

class App extends React.Component {
  state = {
    party: [],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" style={containerStyle}>
            <Header />
          </div>
        </div>
      </Router>
    );
  }
}

const containerStyle = {
  position: "relative",
  width: "1440px",
  height: "1024px",

  background: "#F4F4F4",
};

export default App;
