import React, { Fragment } from 'react';
import './styels.css';

class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                <div className='footer__filter-link'>All</div>
                <div className='footer__filter-link'>Active</div>
                <div className='footer__filter-link'>Completed</div>
            </div>
        );
    }
}

export default Footer
