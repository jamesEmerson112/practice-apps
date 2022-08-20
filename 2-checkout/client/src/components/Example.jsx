import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-cookie">
          <p>Hello, World!</p>
          <p>
            <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          </p>
      </div>
    )
  }
}

export default Example;