import React from 'react';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation_items/NavigationItems';
import DrawerToggle from '../side_drawer/drawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>

        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;