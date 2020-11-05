import React, { Component } from "react";
import "../stylesheet/App.scss";
import PepperHater from "./PepperHater";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PepperHater />;
  }
}

export default App;
