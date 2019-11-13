import React from 'react';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation_items/NavigationItems';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../../hoc/aux/Aux';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} backDropClicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;