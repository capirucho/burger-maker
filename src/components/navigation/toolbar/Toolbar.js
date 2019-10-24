import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation_items/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;