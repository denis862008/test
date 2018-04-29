import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Todo from './Todo';
import { bindAll } from "utils/utils";
import './styles.css';

class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        bindAll(this, ['getVisibleTodos', 'renderTodos']);
    }
    componentWillMount() {
        const todos = this.getVisibleTodos(this.props.todosFilter);
        this.setState({ todos });

        // fetch(
        //     'src/rest/groups.json',
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // ).then(responce => {
        //     console.log('resp: ', responce);
        //     return responce.json();
        // }).then(resp => {
        //     console.log('resp: ', resp);
        // });

        axios({
            method: 'GET',
            url: 'http://localhost:3000/rest/groups.json'
        }).then(resp => {
            console.log(resp);
        }).catch(e => {
            console.error('error: ', e);
        });
    }
    componentWillReceiveProps(nextProps) {
        const nextFilterState = nextProps.todosFilter;
        const currentFilterState = this.props.todosFilter;
        const currentTodosLength = this.props.todosStore.todos.length;
        const nextTodosLength = nextProps.todosStore.todos.length;

        if (currentFilterState !== nextFilterState || currentTodosLength !== nextTodosLength) {
            const todos = this.getVisibleTodos(nextFilterState);
            this.setState({ todos });
        }
    }
    getVisibleTodos(filter) {
        const { todos } = this.props.todosStore;

        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed);
            case 'SHOW_ACTIVE':
                return todos.filter(todo => !todo.completed);
        }
    }
    renderTodos() {
        const { todos } = this.state;

        return (
            todos.length ?
                todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        toggleTodo={this.props.todosActions.toggleTodo}
                    >
                        { todo.text }
                    </Todo>
                )) : 'Todos List is Empty'

        );
    }
    render() {
        return(
            <div className='todos-list'>
                { this.renderTodos() }
            </div>
        );
    }
}

TodosList.propTypes = {
    todosStore: PropTypes.any,
    todosFilter: PropTypes.string,
    todosActions: PropTypes.any
};

export default TodosList;
