import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import AnimeSearch from "./views/anime_search/AnimeSearch";
import AnimeDetails from "./views/anime_details/AnimeDetails";
import CharacterSearch from "./views/character_search/CharacterSearch";
import CharacterDetails from "./views/character_details/CharacterDetails";
import Layout from "./views/shared/Layout";
import { INavbarTab } from "./utilities/INavbarTab";

export const ContainerStyle = styled.div`
  height: 100vh
`;

function App(): JSX.Element {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <Router>
      <Layout navbarTabs={getNavTabs(isLoggedIn)}>
        <ContainerStyle>
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
        </ContainerStyle>
      </Layout>
    </Router>
  );
}

function getNavTabs(isLoggedIn: boolean): INavbarTab[] {
  let result: INavbarTab[] = [];
  if (isLoggedIn) {
    result = [
      { name: "Anime", to: "/anime" }, 
      { name: "Characters", to: "/character" }
    ];
  }
  else {
    result = [
      { name: "Login", to: "/login" }, 
      { name: "Sign Up", to: "/register" }
    ];
  }
  return result;
}

export default App;
