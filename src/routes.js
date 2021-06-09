import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Main from "./Pages/Main"
import Card from "./Pages/Card"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/card" component={Card} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;