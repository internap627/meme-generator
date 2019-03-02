import React, { Component } from 'react';
import Nav from './Nav'
import Text from './Text'
import Meme from './Meme'
import data from './data'


class App extends Component {
  state = {
    topText: "",
    bottomText: "",
    imgUrl: "",
    meme: {}
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const rand = Math.round(Math.random() * data.length)
    const obj = {
      topText: this.state.topText,
      bottomText: this.state.bottomText,
      imgUrl: data[rand]
    }
    this.setState({
      meme: {...obj}
    }, () => {console.log(this.state.meme)})
  }

  render() {
    
    return (
      <div className="App">
        <Nav />
        <Text handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
        <Meme memeObj={this.state.meme} />
      </div>
    );
  }
}

export default App;
