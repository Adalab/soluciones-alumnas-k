import React, { Component } from "react";

const HateHandler = (ev) => {
  if (ev.target.value.toLowerCase().includes("pimiento")) {
    return alert("ODIO EL PIMIENTO!!!");
  }
};

class PepperHater extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea
        onChange={HateHandler}
        name="hate"
        id="hate"
        cols="30"
        rows="10"
      ></textarea>
    );
  }
}

export default PepperHater;
