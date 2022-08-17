import React from "react";
import { render } from "react-dom";
import List from "./List.jsx";
import Entry from "./Entry.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Entry />
        <List />
      </div>
    )
  }
};

export default App;