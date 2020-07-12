import React from 'react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Register from './views/register/Register';
import AnimeSearch from './views/anime_search/AnimeSearch';
import AnimeDetails from './views/anime_details/AnimeDetails';
import CharacterSearch from './views/character_search/CharacterSearch';
import CharacterDetails from './views/character_details/CharacterDetails';


function App() {
  const { Title } = Typography;

  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/anime">
            <AnimeSearch/>
          </Route>
          <Route path="/animedetails">
            <AnimeDetails/>
          </Route>
          <Route path="/character">
            <CharacterSearch/>
          </Route>
          <Route path="/characterdetails">
            <CharacterDetails/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
