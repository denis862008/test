import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import rootReducer from './reducers/index';
import configStore from './store/index';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './styles.css';


// const store = (module.hot && module.hot.data && module.hot.data.store) ?
//     module.hot.data.store : configStore();

const store = configStore();
const appHTMLContainer = document.getElementById('app');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    appHTMLContainer
);

{/* <Provider store={store}>
    <AppContainer>
        <App/>
    </AppContainer>
</Provider>, */}

// if (module.hot) {
//     module.hot.accept();
//
//     module.hot.dispose((data) => {
//         data.store = store;
//     });
// }
