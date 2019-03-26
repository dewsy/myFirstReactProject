import React, { Component } from 'react';
import Todos from './components/Todos.js'
import './App.css';

class App extends Component {

  state = {
    todos : [
      {
        id: 1,
        title: 'title',
        completed: false
      },
      {
        id: 2,
        title: 'title2',
        completed: false
      },
      {
        id: 3,
        title: 'title3',
        completed: false
      }
    ]
  };

  //toggles complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
      })})
  };

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })};




  render() {
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
