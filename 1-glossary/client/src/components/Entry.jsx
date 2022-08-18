import React from "react";
import { render } from "react-dom";

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      definition: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    this.setWord = this.setWord.bind(this);
    this.setDefinition = this.setDefinition.bind(this);
  }

  setWord(e) {
    this.setState({
      word: event.target.value
    })
  }

  setDefinition(e) {
    this.setState({
      definition: event.target.value
    })
  }

  handleSubmit(event) {
    // alert('A word was submitted: ' + this.state.word);
    // alert('A definition was submitted: ' + this.state.definition);
    let wordObj = {word: this.state.word, definition: this.state.definition};
    // console.log(this.props);
    this.props.updateEntry(wordObj);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form id="entry-form">
          <h3>Entry Form:</h3>

          <input type="text" id="word" name="word"
          placeholder="word"
          onChange={this.setWord}></input>

          <br></br>

          <input type="text" id="definition" name="definition"
          placeholder="definition"
          onChange={this.setDefinition}></input>

          <br></br>

          <button className="entry-button" type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Entry;
