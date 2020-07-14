import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    task: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          type="text" 
          name="task" 
          placeholder="Add Todo..."
          style={{flex: '10', padding: '5px'}}
          value={this.state.task}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit"
          className='btn'
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddTodo
