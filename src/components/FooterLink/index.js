import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Link extends React.Component {
    handleClick() {
        const { active, filter } = this.props;
        // const { todos } = this.props.todosStore;

        if (active) return;

        // console.log(filter);
        this.props.todosActions.setVisibilityFilter(filter);
        // if (todos.length) {
        //     this.props.todosActions.setVisibilityFilter(filter);
        // }
    }
    render() {
        const { active } = this.props;

        return (
            <div
                className={`footer__filter-link ${ active ? 'active' : '' } `}
                onClick={this.handleClick.bind(this)}>
                { this.props.children }
            </div>
        );
    }
}

Link.propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    todosStore: PropTypes.any,
    todosActions: PropTypes.any
};

export default Link;
