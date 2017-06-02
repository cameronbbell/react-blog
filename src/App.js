import React, { Component } from "react";
import ViewPost from "./containers/ViewPost";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row>
          <ViewPost />
        </Row>
      </div>
    );
  }
}

export default App;
