import React from "react";
import { render } from "react-dom";
import CheckOut from "./CheckOut.jsx";
import Example from "./Example.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <Example />
        <p>Hello James</p>

        <CheckOut />
      </div>
    )
  }
}

export default App;