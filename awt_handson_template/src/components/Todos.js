import React from 'react'

/* Specify the Prop objects in Functional Components */
/* This functional component will try to display the todo list defined as states in App Component */
export default function Todos({todos=0, deleteTodoFunc}) {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.id}>
					<span>{todo.task}</span>
					{/* Task 2.4: START */}

					{/* Task 2.4: END */}
				</div>
			)
		})
	) : (
		<p className="center">You have no todo's left! Hurray!</p>
	)
	return (
		<div class="todos collection">
				{todoList}
		</div>
	)
}
