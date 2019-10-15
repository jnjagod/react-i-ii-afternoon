import React, {Component} from 'react';
import './App.css';
import data from './data'
import Header from './components/Header'
import Card from './components/Card'
import Nav from './components/Nav'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data,
      index: 0
    }
  }

  nextCard = () => {
    this.state.index === 24 ?
    this.setState({
      index: 0
    })
    :
    this.setState({
      index: this.state.index + 1
    })
  }

  prevCard = () => {
    this.state.index === 0 ?
    this.setState({
      index: 24
    })
    :
    this.setState({
      index: this.state.index - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Card person={this.state.data[this.state.index]} />
        <Nav next={this.nextCard} prev={this.prevCard} />
      </div>
    )
  }
}

export default App;
