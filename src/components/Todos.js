import React, { Component } from 'react';
import TodoItem from './TodoItem';
import {Subscribe} from "unstated";
import TodoContainer from './containers/TodoContainer'

class Todos extends Component {



    render() {
        return (
        <Subscribe to={[TodoContainer]}> {
           TodoContainer => TodoContainer.state.todos.map(todo =>
               <TodoItem key={todo.id} todo={todo}/>)
        }
            {console.log("THIS IS IT!")}
            {console.log(this.props.children)}
        </Subscribe>
    )
    }
}


export default Todos;
