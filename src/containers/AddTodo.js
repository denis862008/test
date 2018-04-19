import React, { Fragment } from 'react';
import  { bindAll } from 'utils/utils';
import * as todosActions from 'actions/Todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        bindAll(this, ['handleSubmit']);
    }
    handleSubmit(event) {
        event.preventDefault();

        if(!this.input.value.trim()) return;
        this.props.todosActions.addTodo(this.input.value);
        this.input.value = '';
    }
    render() {
        return (
            <Fragment>
                <div className='form'>
                    <input style={{display: 'inline-block', width: 'auto'}} className='form-control' ref={val => this.input = val} />
                    <div className='btn btn-primary' onClick={this.handleSubmit}>Create Todo</div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        todosStore: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(todosActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
