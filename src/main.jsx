import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import { LOCALFORAGE_INITIATE } from './initiates/initiate';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Any packages that required configure and/or set something required initiate, please write the initiate code in here
LOCALFORAGE_INITIATE();
