import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../ui/Backdrop/Backdrop";

const sideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clickHandler={props.sideDrawerCloseHandler} />
      <div
        className={[
          classes.SideDrawer,
          props.show ? classes.Open : classes.Close,
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
