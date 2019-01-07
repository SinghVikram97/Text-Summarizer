import React, { Component } from "react";
import "./InputArea.css";

export default class InputArea extends Component {
  state = {
    inputText: "",
    numSentences: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.summarizeContent(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div className="textArea ma5 mb0">
        <form className="pa4 black-80" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="comment" className="f3 b db mb2">
              Content
            </label>
            <textarea
              onChange={this.handleChange}
              id="inputText"
              className="comment db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"
            />
            <small id="comment-desc" className="f6 black-60">
              Enter the number of sentences you want to summarize content into{" "}
              <a href="#" className="link underline black-80 hover-blue">
                more
              </a>
            </small>
            <br />
            <input
              id="numSentences"
              type="number"
              name="quantity"
              className="sentences ma3"
              onChange={this.handleChange}
            />
          </div>
          <button className="ma2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
