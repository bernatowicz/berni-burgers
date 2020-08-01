import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";
import SideDrawer from "../navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar menuClickHandler={this.sideDrawerToggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          sideDrawerCloseHandler={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
