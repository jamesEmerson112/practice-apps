import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    return (
      <div>
        <input type="text" name="name" onChange={this.handleChange} placeholder="Name"/>
        <input type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
        <input type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
      </div>
    )
  }
}

export default Form1;