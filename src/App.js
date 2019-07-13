import React, {Component} from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header'
import TextSection from './TextSection';
import Przycisk from './Przycisk'
import Stan from './Stan'


class App extends Component {
  
    state = {count: 0}
    
    handleClickPlus = () => (this.setState({count: this.state.count+1}))
    handleClickMinus = () => (this.setState({count: this.state.count-1}))
    handleClickReset = () => (this.setState({count: 0}))  

  render() {
  
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
          <h1>Blog Piotrka</h1>
      </header>
   
    <TextSection title="To jest tytuł nr 1" />
    <TextSection title="To jest tytuł nr 2" />
    <TextSection cssclass1="ramka" title="To jest tytuł nr 3" />
    <div className="ramka">
      <TextSection title="Lorem Ipsum" />
    </div>
    {this.state.count}
    <Przycisk nameOfFunction={this.handleClickPlus} name="+"/>
    <Przycisk nameOfFunction={this.handleClickMinus} name="-"/>
    <Przycisk nameOfFunction={this.handleClickReset} name="RESET"/>
    
    <Footer/>

    </div>
  );
}
}

export default App;
