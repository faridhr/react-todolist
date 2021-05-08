import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      animals : ['Tiger', 'Lion', 'Snake', 'Monkey', 'Cat'],
      inputan : ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    if (this.state.inputan !== '') {
      this.setState({
        animals : [...this.state.animals, this.state.inputan],
        inputan: ''
      })
    }
    
  }

  handleInput(e){
    this.setState({inputan: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h2>Todo List App</h2>
        <hr/>
        <input value={this.state.inputan} onChange={this.handleInput} type="text"/>
        <button onClick={this.handleSave} type="button">Save</button>
        <hr/>
        <ul>
          {this.state.animals.map((a, index) => <li key={index}>Nama : {a} | Panjang : {a.length}</li>)}
        </ul>
      </div>
    )
  }
}
