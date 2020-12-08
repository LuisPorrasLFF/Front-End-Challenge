import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Navbar from '../views/shared/Navbar';
import { INavbarTab } from '../utilities/INavbarTab';

export default {
    title: 'Navbar',
    component: Navbar,
};

export const ToStorybook = () => (
    <Navbar navbarTabs={getTestingNavbarTabs(true)}>
    </Navbar>);

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