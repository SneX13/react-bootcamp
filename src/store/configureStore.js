import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore =
    process.env.NODE_ENV === "production"
        ? createStore(rootReducer, applyMiddleware(thunk))
        : createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default configureStore;
