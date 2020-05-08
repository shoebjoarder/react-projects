import React, { Component } from 'react'
import Header from './layout/Header'
import Body from './layout/Body'

export class App extends Component {
  // Initialize the states
  state = {
    todos: [
      {
        id: 1,
        title: 'Do the AWT Bootstrap & MongoDB Homework by 20th of May',
        completed: false
      },
      {
        id: 2,
        title: 'Finish the second draft of the presentation',
        completed: false
      },
      {
        id: 3,
        title: 'Finish the recordings of the presentation',
        completed: false
      },
      {
        id: 4,
        title: 'Prepare the hands-on session codes',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    )
  }
}

export default App

