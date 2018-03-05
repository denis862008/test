import React, { Fragment } from 'react';
import AddTodo from './containers/AddTodo';
import Footer from './components/Footer/index';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <AddTodo/>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
