import React from "react";
import { render } from "react-dom";


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    return (
      <div>
      There are {this.props.listOfWords.length} words.
      {this.props.listOfWords.map(word => {
        return (
          <p key={word.word}>{word.word} - {word.definition}</p>
        )
      })}
      </div>
    )
  }
};

export default List;
