import React from "react";
import { render } from "react-dom";

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      definition: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A word was submitted: ' + this.state.word);
    alert('A definition was submitted: ' + this.state.definition);
    console.log(this.state);

    event.preventDefault();
  }



  render() {
    return (
      <div>
        <form id="entry-form">
          <h3>Entry Form:</h3>
          <input type="text" id="word" name="word"
          placeholder="word"
          onChange={this.handleChange}></input>
          <br></br>
          <input type="text" id="definition" name="definition"
          placeholder="definition"
           onChange={this.handleChange}></input>
          <br></br>
          <button className="entry-button" type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Entry;
