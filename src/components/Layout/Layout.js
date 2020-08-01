import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";
import SideDrawer from "../navigation/SideDrawer/SideDrawer";

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
