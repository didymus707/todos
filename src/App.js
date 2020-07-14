import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid} from 'uuid';
import axios from 'axios'
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode/todos?_limit=15')
    .then(res => this.setState({ todos: res.data }))
  }

  state = {
    todos: [
      {
        id: uuid(),
        task: 'Finish Login Page',
        completed: false
      },
      
      {
        id: uuid(),
        task: 'Finish Private Events',
        completed: false
      },

      {
        id: uuid(),
        task: 'SOM Assignment',
        completed: false
      },

      {
        id: uuid(),
        task: 'Developing Manhood Assignment',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (task) => {
    const newTodo = {
      id: uuid(),
      task,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={ this.markComplete } delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
