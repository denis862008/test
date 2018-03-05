import rootReducer from 'reducers/index';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configStore = (initialState) => {
    const store = compose(applyMiddleware(thunk)(createStore)(rootReducer, initialState));

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/index', () => {
                store.replaceReducer(rootReducer);
            });
        }
    }

    return store;
};

export default configStore;
