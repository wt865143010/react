import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import "antd/dist/antd.css"

ReactDOM.render(

    <App />,

=======
import 'antd/dist/antd.css'
import {Provider} from "mobx-react";
import store from './store/store'

ReactDOM.render(

    <Provider {...store}>
        <App />
    </Provider>,
>>>>>>> 040f1c3fdb56251c1813989bbdcec7971a89fd57
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
