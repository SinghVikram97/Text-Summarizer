import React, { Component } from "react";
import "./App.css";
import "../node_modules/tachyons";
import Navbar from "./Components/Navbar/Navbar";
import InputArea from "./Components/InputArea/InputArea";
import SummarizedText from "./Components/SummarizedText/SummarizedText";

class App extends Component {
  state = {
    summary: ""
  };

  summarizeContent = text => {
    let inputText = text.inputText;
    let numSentences = text.numSentences;
    console.log(numSentences);
    fetch("https://secret-temple-96441.herokuapp.com/summary", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputText: inputText,
        numSentences: numSentences
      })
    })
      .then(response => response.json())
      .then(summary => {
        summary = summary.slice(2, summary.length - 2);
        this.setState({
          summary: summary
        });
      });
  };

  render() {
    return (
      <div className="App pl-0">
        <Navbar />
        <InputArea summarizeContent={this.summarizeContent} />
        <SummarizedText summary={this.state.summary} />
      </div>
    );
  }
}

export default App;
