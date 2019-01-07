import React, {
  Component
} from 'react'
import './Navbar.css'
export default class Navbar extends Component {
  onSubmit=()=>{
    let x=document.getElementById('myTopnav');
    if(x.className==='topnav'){
      x.classList.add('responsive')
    }else{
      x.className="topnav"
    }
  }
  render() {
    return ( 
    < div className="topnav" id="myTopnav" >
      <a href="#home" className="home">TextSummarization</a>
      <a href="#online">Text Summarizer Online</a>
      <a href="#api">Text Summarization Api</a>
      <a href="javascript:void(0);" className="icon last" onClick={this.onSubmit}>
         <i className="fa fa-bars"></i>
      </a>
    </div>
    )
  }
}