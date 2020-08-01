import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clickHandler}>
    {props.children}
  </div>
);

export default DrawerToggle;
