import React from "react";
import { render } from "react-dom";

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <h3>Entry Form:</h3>
        </form>
      </div>
    )
  }
}

export default Entry;
