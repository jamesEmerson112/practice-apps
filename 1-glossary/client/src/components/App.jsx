import React from "react";
import { render } from "react-dom";
import List from "./List.jsx";
import Entry from "./Entry.jsx";
import axios from "axios";

const testData = [
  {
    word: "James",
    definition: "stressed"
  },
  {
    word: "test",
    definition: "checkmate"
  },
  {
    word: "Ivory",
    definition: "elephant musk"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfWords: testData
    }

    this.test = this.test.bind(this);

    this.updateEntry = this.updateEntry.bind(this);
  }

  test(event) {
    console.log(this.state);
  }

  updateEntry(wordObj) {
    // loggin
    // console.log('update entry');
    // console.log(wordObj);

    // sending a post request
    axios.post('/word', wordObj)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.warn(error);
      })
  }

  render() {
    return (
      <div>
        {/* <Entry word={this.state.word}
        definition={this.state.definition}
        updateEntry={this.updateEntry} /> */}

        <Entry updateEntry={this.updateEntry} />

        <button className="entry-button" type="button" onClick={this.test}>Test</button>

        <List listOfWords={this.state.listOfWords} />
      </div>
    )
  }
};

export default App;