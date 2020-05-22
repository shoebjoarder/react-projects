import React, { Component } from 'react'

/* Automatically gets Prop objects in Class Components */
export default class AddForm extends Component {
	state = {
		task: ''
	}
	/* Task 3.4: START */
	handleChange = () => {

	}
	/* Task 3.4: END */


	handleSubmit = (e) => {
		e.preventDefault();
		/* Task 3.5 START */
		
		/* Task 3.5 END */
		this.setState({
			task: ''
		})
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add new todo:</label>

					{/* Task 3.3: START */}

					<input type="text" value={this.state.task} />

					{/* Task 3.3: END */}
				</form>
			</div>
		)
	}
}
