import React, { Component } from 'react'

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusBurron = () => {
    this.setState( { count: this.state.count +1 })
  }

  handleMinusBurron = () => {
    this.setState( { count: this.state.count -1 })
  }

  render () {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusBurron}>+1</button>
        <button onClick={this.handleMinusBurron}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
