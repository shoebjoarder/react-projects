import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import {v4 as uuid} from 'uuid'

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with friends',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    //console.log(id)
    this.setState({
      // ... spread operator copy everything from this.state
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    //console.log(title)
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
