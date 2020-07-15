import React from "react";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import AnimeSearch from '../anime_search/AnimeSearch';
import AnimeDetails from '../anime_details/AnimeDetails';
import CharacterSearch from '../character_search/CharacterSearch';
import CharacterDetails from '../character_details/CharacterDetails';

function Routes() {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
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
    );
}

export default Routes;