import React from "react";

class Form1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Form1</p>
        <p>Name</p>
        <p>Email</p>
        <p>Password</p>
        <button>Submit</button>
      </div>
    )
  }
}

export default Form1;