import React from "react"
import {render} from "react-dom"
import './index.css'
import {App} from './App'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {StartPage} from "~/startPage/startPage";

render(<Router>
    <Switch>
      <Route exact path="/">
        <StartPage/>
      </Route>
      <Route exact path="/birds">
        <App />
      </Route>
    </Switch>
</Router>, document.getElementById('root'))