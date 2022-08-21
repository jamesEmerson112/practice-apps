import React from "react";

class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      line1addr: "",
      line2addr: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      creditCardNumber: "",
      securityNumber: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.name + ' ' + event.target.value)
  }

  handleSubmit() {
    let userObj = this.state;
    this.props.updateForm1(userObj);
  }

  render() {
    return (
      <div>
        <form id="form1">
          <p>Form1</p>
          <input required type="text" name="name" onChange={this.handleChange} placeholder="Name"/>
          <input required type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
          <input required type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
        </form>
        <form id="form2">
          <p>Form2</p>
          <input required type="text" name="line1addr" onChange={this.handleChange} placeholder="Line 1 Address" />
          <input type="text" name="line2addr" onChange={this.handleChange} placeholder="Line 2 Address" />
          <input type="text" name="city" onChange={this.handleChange} placeholder="City" />
          <input type="text" name="state" onChange={this.handleChange} placeholder="State" />
          <input type="number" name="zipCode" onChange={this.handleChange} placeholder="11111" />
          <input type="number" name="phoneNumber" onChange={this.handleChange} placeholder="111-111-1111" />
        </form>
        <form id="form3">
          <p>Credit Card #</p>
          <input required type="number" name="creditCardNumber" onChange={this.handleChange} placeholder="xxxxx-xxxxx-xxxxx" />
          <input required type="number" name="securityNumber" onChange={this.handleChange} placeholder="xxxx" />
        </form>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Form1;