import React, { Component } from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Performance optimization:
    // Only re-render this and children if the show state has changed:
    const shouldUpdate = nextProps.show !== this.props.show;
    // console.log("[Modal] shouldComponentUpdate: " + shouldUpdate);
    return shouldUpdate;
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clickHandler={this.props.modalCloseHandler}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
