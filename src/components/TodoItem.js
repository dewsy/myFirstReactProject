import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    getStyle = () => {
            return {
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
        }

    render() {
        return (
            <div style={this.getStyle()}>
                <h3> { this.props.todo.title } </h3>
            </div>
        );
    }
}

//PropTypes
TodoItem.propTypes= {
    todo: PropTypes.object.isRequired
}

export default TodoItem;