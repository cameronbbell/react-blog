import React, { Component } from "react";
import { Route } from "react-router-dom";
import ViewPost from "./containers/ViewPost";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Links from "./components/Links";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row>
          <div>
            <Route path="/about" component={About} />
            <Route path="/links" component={Links} />
            <Route exact path="/" component={ViewPost} />
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
