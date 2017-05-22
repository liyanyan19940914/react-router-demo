import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory,Redirect} from 'react-router';
import App from "./containers/App";
import Message from './containers/message';
import Personal from './containers/personal';
import reducer from "./reducer/index";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/message" component={Message}/>
            <Redirect from="home" to="message"/>
            <Route path="/personal" component={Personal}/>
        </Router>
    </Provider>, document.getElementById('app'));
