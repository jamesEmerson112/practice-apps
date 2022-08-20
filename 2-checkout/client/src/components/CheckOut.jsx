import React from "react";
import Form1 from "./Form/Form1.jsx";
import Form2 from "./Form/Form2.jsx";
import Form3 from "./Form/Form3.jsx";

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div id="CheckOut">
        <button>Check Out</button>
        <Form1 />
        <Form2 />
        <Form3 />
      </div>
    )
  }
}


export default CheckOut;