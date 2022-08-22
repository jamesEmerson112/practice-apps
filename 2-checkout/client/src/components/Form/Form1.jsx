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
      zipcode: "",
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
    // console.log(event.target.name + ' ' + event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();

    let userObj = this.state;
    this.props.updateForm1(userObj);
  }

  render() {
    return (
      <div>
        {/* <form required>
        <p>Form1</p>
          <input required type="text" name="name" onChange={this.handleChange} placeholder="Name"/>
          <input required type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
          <input required type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
        <p>Form2</p>
          <input required type="text" name="line1addr" onChange={this.handleChange} placeholder="Line 1 Address" />
          <input type="text" name="line2addr" onChange={this.handleChange} placeholder="Line 2 Address" />
          <input type="text" name="city" onChange={this.handleChange} placeholder="City" />
          <input type="text" name="state" onChange={this.handleChange} placeholder="State" />
          <input type="number" name="zipCode" onChange={this.handleChange} placeholder="11111" />
          <input type="number" name="phoneNumber" onChange={this.handleChange} placeholder="111-111-1111" />
        <p>Credit Card #</p>
          <input required type="number" name="creditCardNumber" onChange={this.handleChange} placeholder="xxxxx-xxxxx-xxxxx" />
          <input required type="number" name="securityNumber" onChange={this.handleChange} placeholder="xxxx" />
          <input type="submit" onClick={this.handleSubmit} value="Submit" />
        </form> */}
        <form >
        <p>Form1</p>
          <input  type="text" name="name" onChange={this.handleChange} placeholder="Name"/>
          <input  type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
          <input  type="password" name="password" onChange={this.handleChange} placeholder="Password"/>
        <p>Form2</p>
          <input  type="text" name="line1addr" onChange={this.handleChange} placeholder="Line 1 Address" />
          <input type="text" name="line2addr" onChange={this.handleChange} placeholder="Line 2 Address" />
          <input type="text" name="city" onChange={this.handleChange} placeholder="City" />
          <input type="text" name="state" onChange={this.handleChange} placeholder="State" />
          <input type="number" name="zipcode" onChange={this.handleChange} placeholder="11111" />
          <input type="number" name="phoneNumber" onChange={this.handleChange} placeholder="111-111-1111" />
        <p>Credit Card #</p>
          <input  type="number" name="creditCardNumber" onChange={this.handleChange} placeholder="xxxxx-xxxxx-xxxxx" />
          <input  type="number" name="securityNumber" onChange={this.handleChange} placeholder="xxxx" />
          {/* <button type="button" onClick={this.handleSubmit}>Submit</button> */}
          <input type="submit" onClick={this.handleSubmit} value="Submit" />
        </form>
      </div>

    )
  }
}

export default Form1;