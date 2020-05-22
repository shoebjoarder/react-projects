import React, { Component } from 'react'

// Import the Todos Component
import Todos from './components/Todos'
import AddForm from './components/AddForm'

export default class App extends Component {
	/* Task 1.1: START */


	/* Task 1.1: END */

	/* Task 2.2: START */
	deleteTodo() {
	/* Task 1.1: END */
	
		const filteredTodo = this.state.todos.filter(todo => {
			return todo.id !== id
		});
		/* Task 2.3: START */


		/* Task 2.3: END */
	}

	/* Task 3.1: START*/
	addTodo() {

	}
	/* Task 3.1: END */

	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">A Simple Todo list</h1>

				{/* Task 2.1: START */}

					{/* Task 1.2: START */}

					<Todos />

					{/* Task 1.2: END */}

				{/* Task 2.1: END */}

				{/* Task 3.2: START*/}

				<AddForm />

				{/* Task 3.2: END */}
			</div>
		)
	}
}
