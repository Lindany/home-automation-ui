import React from "react";
import Navigation from "./Navigation/Navigation";
import NavigationItem from "./Navigation/NavigationItem/NavigationItem";

import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContainer}>
        <div className={classes.AppName}>Home Automation UI</div>
        <Navigation>
          <NavigationItem>Rooms</NavigationItem>
          <NavigationItem>Github</NavigationItem>
        </Navigation>
      </div>
    </header>
  );
}
