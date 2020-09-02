import React from "react"
import {render} from "react-dom"
import './index.css'
import {App} from './App'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {StartPage} from "~/startPage/startPage";
import {store} from "~/store";
import {Provider} from "react-redux";

render(<Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <StartPage/>
        </Route>
        <Route exact path="/birds/:index">
          <App />
        </Route>
      </Switch>
    </Provider>
</Router>, document.getElementById('root'))