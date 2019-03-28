import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from "axios";
import {Provider} from "unstated";
import TodoContainer from "./components/containers/TodoContainer"

import Header from './components/layout/Header';
import Todos from './components/Todos.js'
import './App.css';
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";


class App extends Component {

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => TodoContainer.setState({todos: res.data}))
    }

  render() {
    return (
        <Provider>
        <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={() => (
              <React.Fragment>
                  <AddTodo/>
                  <Todos />
              </React.Fragment>
          )} />
        <Route path="/about" component={About}
          />
        </div>
      </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
