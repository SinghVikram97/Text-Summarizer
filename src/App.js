import React, {
  Component
} from 'react';
import './App.css';
import '../node_modules/tachyons'
import Navbar from './Components/Navbar/Navbar'
import InputArea from './Components/InputArea/InputArea'
import SummarizedText from './Components/SummarizedText/SummarizedText'


class App extends Component {

  state={
    summary:''
  }

  summarizeContent=(text)=>{
    let summary=text.inputText;
    this.setState({
      summary:summary
    })
  }

  render() {
    return ( <div className = "App pl-0" >
        <Navbar / >
        <InputArea summarizeContent={this.summarizeContent}/>
        <SummarizedText summary={this.state.summary}/>
      </div>
    );
  }
}

export default App;