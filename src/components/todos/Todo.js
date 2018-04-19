import React from 'react';
import PropTypes from 'prop-types';
import { bindAll } from "utils/utils";

class Todo extends React.Component {
    constructor(props) {
        super(props);

        bindAll(this, ['handleClickTodo']);
    }
    handleClickTodo(event) {
        event.preventDefault();

        this.props.toggleTodo(this.props.id);
    }
    render() {
        const { completed } = this.props;
        const styleTodo = {
            textDecoration: completed ? 'line-through' : 'none'
        };

        return (
            <div
                style={styleTodo}
                className='todos-list__item'
                onClick={this.handleClickTodo}
            >
                { this.props.children }
            </div>
        );
    }
}

Todo.propTypes = {
    children: PropTypes.node,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default Todo;
