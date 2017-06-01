import React, { Component } from "react";
import ViewPost from "./containers/ViewPost";
import Row from "./components/Row";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Row>
        <ViewPost />
      </Row>
    );
  }
}

export default App;
