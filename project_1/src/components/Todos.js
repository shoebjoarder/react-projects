import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types' // validation of properties that components should have either we can set the type or if its required


class Todos extends React.Component {
    render() {
        // Remember it comes from the state of App.js then pass it down as props and then we can view the props with command below
        //console.log(this.props.todos)

        // map function: create a for each loop, we would like to return the h3 tag
        return this.props.todos.map((todo) => (
            //<h3>{ todo.title }</h3>
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

// proptypes
Todos.propTypes = { // this should the name of the class in this file
    todos: PropTypes.array.isRequired // this should be the var in the file that is holding the props
}
export default Todos;
