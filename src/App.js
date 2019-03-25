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
  }


  render() {
    return (
      <div className="App">
        <Todos todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
