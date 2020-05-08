import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
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
  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
