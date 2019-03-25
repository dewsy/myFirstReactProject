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

  markComplete = (id) => {
    console.log(id)
  }



  render() {
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
