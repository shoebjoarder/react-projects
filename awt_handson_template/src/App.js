import React, { Component } from 'react'

// Import the Todos Component
import Todos from './components/Todos'
import AddForm from './components/AddForm'

export default class App extends Component {
	/* Task 1: Create Constructor, add super(props) inside and create a state property todos array of atleast 4 elements with "id" and "task" as element's properties. id should be of type int and "task" should be of type string*/


	/* Task 1: END */

	deleteTodo = (id) => {
		const filteredTodo = this.state.todos.filter(todo => {
			return todo.id !== id
		});
		// Task 2.4: Set state method to assign the const variable "filterTodo" to todos


		// Task 2.4: END
	}

	/* Task 3.2: Create Todo Method and todo as input parameter */
	addTodo() {

	}
	/* Task 3.2: Ends */

	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">A Simple Todo list</h1>

				{/* Task 2.1: Pass the deleteTodo method to the Todos Component */}

					{/* Task 1.2: Add the Todos Component and pass the props (todos array) into the Todos component */}

				<Todos />

					{/* Task 1.2: End */}

				{/* Task 2.1: End */}

				{/* Task 3.1: Pass the addTodo prop method to the AddForm Component */}

				<AddForm />

				{/* Task 3.1: End */}
			</div>
		)
	}
}
