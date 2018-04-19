import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todosActions from 'actions/Todos';
import Link from '../components/FooterLink/index';

function mapStateToProps(state, ownProps) {
    return {
        todosStore: state.todos,
        active: ownProps.filter === state.filter.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(todosActions, dispatch)
    };
}

const TodosFilter = connect(mapStateToProps, mapDispatchToProps)(Link);

export default TodosFilter;
