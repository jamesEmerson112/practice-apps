import React from "react";
import Form1 from "./Form/Form1.jsx";
import axios from "axios";

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        line1addr: '',
        line2addr: '',
        city: '',
        state: '',
        zipcode: '',
        phoneNumber: '',
        creditCardNumber: '',
        securityNumber: ''
      }
    }

    this.updateForm1 = this.updateForm1.bind(this);
    this.test = this.test.bind(this);
  }

  updateForm1(userObj) {
    // logging out user info to check if user info is refreshed
    // console.log(this.state.user);

    // update the state
    for (const key in userObj) {
        this.state.user[key] = userObj[key];
    }
    console.log(this.state.user);
    // post request
    axios.post('/user', this.state.user)
      .then(() => {
        console.log('POST request is successful');
      })
      .catch((event) => {
        console.warn(event);
      })
  }

  test() {
    console.log('test this.state.user ', this.state.user);
  }

  render() {
    return(
      <div id="CheckOut">
        <button>Check Out</button>
        <Form1 updateForm1={this.updateForm1}/>
        <button onClick={this.test}>test</button>
      </div>
    )
  }
}


export default CheckOut;