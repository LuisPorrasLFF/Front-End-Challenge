import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import AnimeSearch from "../anime_search/AnimeSearch";
import AnimeDetails from "../anime_details/AnimeDetails";
import CharacterSearch from "../character_search/CharacterSearch";
import CharacterDetails from "../character_details/CharacterDetails";
import Layout from "./Layout";

function Routes(): JSX.Element {
  const [isLoggedIn, setLogged] = useState<boolean>(false);

  const routes = <Switch></Switch>;

  return (
    <Layout isLoggedIn>
      <Router>
        {!isLoggedIn && (
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
        {isLoggedIn && (
          <Switch>
            <Route path="/anime">
              <AnimeSearch />
            </Route>
            <Route path="/animedetails">
              <AnimeDetails />
            </Route>
            <Route path="/character">
              <CharacterSearch />
            </Route>
            <Route path="/characterdetails">
              <CharacterDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </Layout>
  );
}

export default Routes;
