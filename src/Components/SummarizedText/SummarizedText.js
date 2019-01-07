import React, { Component } from 'react'
import './SummarizedText.css'
export default class SummarizedText extends Component {
  render() {
    return (
      <div>
        <p className="summary">
          {this.props.summary}
        </p>
      </div>
    )
  }
}
