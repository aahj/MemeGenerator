import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import { fetchMeme } from './actions'

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store==>', store.getState()));
store.dispatch(fetchMeme())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)