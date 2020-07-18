import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import AnimeSearch from "../anime_search/AnimeSearch";
import AnimeDetails from "../anime_details/AnimeDetails";
import CharacterSearch from "../character_search/CharacterSearch";
import CharacterDetails from "../character_details/CharacterDetails";
import Layout from "./_Layout";

function Routes(): JSX.Element {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(true);

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        {isLoggedIn ? (
          <Switch>
            <Route path="/anime" exact>
              <AnimeSearch />
            </Route>
            <Route path="/anime/:id">
              <AnimeDetails />
            </Route>
            <Route path="/character" exact>
              <CharacterSearch />
            </Route>
            <Route path="/character/:id">
              <CharacterDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        ) : (
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
      </Layout>
    </Router>
  );
}

export default Routes;
