import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Subscribe} from "unstated";
import TodoContainer from './containers/TodoContainer';


class TodoItem extends Component {

    getStyle = () => {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
        };

    render() {
        const { id, title } = this.props.todo;
        return (
            <Subscribe to={TodoContainer}>
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={TodoContainer.markComplete.bind(this, id)} /> {" "}
                    { title }
                    <button onClick={TodoContainer.delTodo.bind(this, id)} style={xButtonStyle}>x</button>
                </p>
            </div>
            </Subscribe>
        );
    }
}

//PropTypes
TodoItem.propTypes= {
    todo: PropTypes.object.isRequired,
};

const xButtonStyle = {
    background: "#ff0000",
    color: "#fff",
    border: 'none',
    padding: "5px 9px",
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;