import { Container } from 'unstated';
import axios from "axios";

class TodoContainer extends Container {

    state = {
        todos : []
    };


    //toggles complete
    static markComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })})
    };

    //deletes
    static delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]
            }) )
    };

    //adds new
    addTodo = (title) => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false})
            .then(res => this.setState({todos: [...this.state.todos, res.data]}) );


    };

    static createState = (e) => {
        this.setState( (state) => ({todos: e}))
    }


}

export default TodoContainer;