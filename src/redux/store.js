import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

let store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
