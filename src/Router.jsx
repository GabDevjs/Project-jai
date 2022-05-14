import React from "react";
import { Route, Switch } from "react-router-dom";
import Comentarios from "./pages/Comentarios/Comentarios";
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";
import Usuarios from "./pages/Usuarios/Usuarios";


const Router = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/Produtos">
                    <Products />
                </Route>
                <Route exact path="/User">
                    <Usuarios />
                </Route>
                <Route exact path="/Comentarios">
                    <Comentarios/>
                </Route>
            </Switch>
    );
};

export default Router;
