import React, { Fragment } from 'react';
import TodosFilter from '../../containers/TodosFilter';
import './styels.css';

class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                <TodosFilter filter='SHOW_ALL'>
                    All
                </TodosFilter>
                <TodosFilter filter='SHOW_ACTIVE'>
                    Active
                </TodosFilter>
                <TodosFilter filter='SHOW_COMPLETED'>
                    Completed
                </TodosFilter>
            </div>
        );
    }
}

export default Footer
