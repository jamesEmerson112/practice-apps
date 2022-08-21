import React from "react";
import Form1 from "./Form/Form1.jsx";

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }

    this.updateForm1 = this.updateForm1.bind(this);
  }

  updateForm1(userObj) {
    // logging out user info
    console.log(this.state.user);

    //
    console.log(userObj);
    for (const key in userObj) {
      if (!this.state.user.hasOwnProperty(key)) {
        this.state.user[key] = userObj[key];
      }
    }

    // logging out user info
    console.log('this.state.user ', this.state.user);
  }

  render() {
    return(
      <div id="CheckOut">
        <button>Check Out</button>
        <Form1 updateForm1={this.updateForm1}/>
      </div>
    )
  }
}


export default CheckOut;