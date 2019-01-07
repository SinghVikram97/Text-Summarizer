import React, { Component } from 'react'
import './InputArea.css'

export default class InputArea extends Component {

  state={
    inputText:''
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.summarizeContent(this.state);
  }

  handleChange=(event)=>{
    this.setState({
      inputText:event.target.value
    })
  }


  render() {
    return (
    <div className="textArea">
        <form className="pa4 black-80" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="comment" className="f3 b db mb2">Content</label>
            <textarea onChange={this.handleChange} id="comment" className="comment db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
            <small id="comment-desc" className="f6 black-60">Copy and paste the text you want to summarize in the above text box <a href="#" className="link underline black-80 hover-blue">more</a></small>
         </div>
         <button className="ma3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Submit</button>
        </form>
    </div>
    )
  }
}
