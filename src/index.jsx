import React from "react"
import {render} from "react-dom"
import './index.css'
import {App} from './App'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {StartPage} from "~/startPage/startPage";
import {store} from "~/store";
import {Provider} from "react-redux";
import {FinalPage} from "~/finalPage/finalPage";
import {Birds} from "~/birds/birds";
import {Main} from "~/main/main";

render(<Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <StartPage/>
        </Route>
        <Route exact path="/birds/:index">
          <App>
            <Main />
            <Birds />
          </App>
        </Route>
        <Route exact path="/results">
          <App>
            <FinalPage />
          </App>
        </Route>
      </Switch>
    </Provider>
</Router>, document.getElementById('root'))