import React, { Fragment } from 'react';
import  { bindAll } from 'utils/utils';
import * as todosActions from 'actions/Todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        bindAll(this, ['handleSubmit', 'renderTodos']);
    }
    handleSubmit(event) {
        event.preventDefault();

        const { todos } = this.props.todosStore;

        if(!this.input.value.trim()) return;
        this.props.todosActions.addTodo(todos, this.input.value);
        this.input.value = '';
    }
    renderTodos() {
        const { todos } = this.props.todosStore;

        return (
            <div className='todos-list'>
                {
                    todos.length ?
                        todos.map((todo, idx) => (
                            <div key={idx}>{ todo.text }</div>
                        )) : 'Todos List is Empty'
                }
            </div>
        );
    }
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input style={{display: 'inline-block', width: 'auto'}} className='form-control' ref={val => this.input = val} />
                    <button className='btn btn-primary' type='submit'>Create Todo</button>
                </form>

                { this.renderTodos() }
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(todosActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        todosStore: state.todos
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
