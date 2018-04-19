import React from 'react';
import TodosList from '../components/todos/TodosList';
import * as todosActions from 'actions/Todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import  { bindAll } from 'utils/utils';

class VisibleTodosList extends React.Component {
    render() {
        return <TodosList
                    todosStore={this.props.todosStore}
                    todosFilter={this.props.todosFilter.filter}
                    todosActions={this.props.todosActions}
                />;
    }
}

function mapStateToProps(state) {
    return {
        todosStore: state.todos,
        todosFilter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(todosActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodosList);
