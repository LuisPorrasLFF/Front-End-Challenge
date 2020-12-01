import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Navbar from '../views/shared/Navbar';

export default {
    title: 'Navbar',
    component: Navbar,
};

export const ToStorybook = () => (
<Navbar>
<ul>
    <li>
        Anime
    </li>
    <li>
        Characters
    </li>
</ul>
</Navbar>);

ToStorybook.story = {
  name: 'to Storybook',
};