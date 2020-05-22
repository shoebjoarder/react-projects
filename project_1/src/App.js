import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { v4 as uuid } from 'uuid'

class App extends React.Component {
  // Task to create the constructor and super 
  constructor(props) {
    super(props);
    // Task to create Constructor
    console.log("Constructor: Constructor loaded");
    // Task to create one property array of state
    this.state = {
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
  }

  // Task to create componentWillMount
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is unmounted from the DOM!");
  }

  // Task to create componentDidMount
  componentDidMount() {
    const newTodo = {
      id: uuid(),
      title: 'Component did mount to do',
      completed: false
    }
    setTimeout(() => {
      this.setState({
        todo: [...this.state.todos, newTodo]
      })
    }, 5000)
    console.log("componentDidMount: Component is mounted!");
  }

  // Task to create component did mount
  shouldComponentUpdate(newProps, newState) {
    var count = Object.keys(newState.todos).length
    console.log("shouldComponentUpdate: Should the component update?");
    if (count < 5) {
      console.log("shouldComponentUpdate: Component should update!");
      return true;
    } else {
      this.componentWillMount();
      console.log("shouldComponentUpdate: Component should not update!");
      return false;
    }
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

  // this can be one task for event handling passing argument
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
