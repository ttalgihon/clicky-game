import React, { Component } from "react";

//  lets the user know if they were correct of not
// called into TopNav.js'''

export default class Score extends Component {
  state = {
    message: "",
    animating: false
  };

  componentDidUpdate({ score, topScore }, prevState) {
    const newState = { animating: true };

    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }

    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }

  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return "Alright! You guessed correctly!";
    case "incorrect":
      return "oh...You guessed incorrectly!";
    default:
      return "Click an image to begin! Don't click an image more than once!";
    }
  };

  render() {
    return (
      <li
        className={this.state.animating ? this.state.message : ""}
        onAnimationEnd={() => this.setState({ animating: false })}
      >
        {this.renderMessage()}
      </li>
    );
  }
}

//export default Score;
