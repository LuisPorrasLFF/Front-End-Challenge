import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Navbar from '../views/shared/Navbar';
import { INavbarTab } from '../utilities/INavbarTab';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default {
    title: 'Navbar',
    component: Navbar,
};

export const ToStorybook = () => 
    (<Router>
        <Navbar navbarTabs={getTestingNavbarTabs(true)}>
        </Navbar>
    </Router>);

function getTestingNavbarTabs(isLoggedIn: boolean): INavbarTab[] {
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

ToStorybook.story = {
    name: 'to Storybook',
}; 