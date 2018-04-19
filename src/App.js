import React, { Fragment } from 'react';
import AddTodo from './containers/AddTodo';
import Footer from './components/Footer/index';
import VisibleTodosList from './containers/VisibleTodosList';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <AddTodo />
                <VisibleTodosList />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
