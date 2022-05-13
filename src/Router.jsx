import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Router = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
    );
};

export default Router;
