import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
import INGREDIENTS from "../Ingredients";

const controls = [
  { label: INGREDIENTS["salad"].label, type: "salad" },
  { label: INGREDIENTS["bacon"].label, type: "bacon" },
  { label: INGREDIENTS["cheese"].label, type: "cheese" },
  { label: INGREDIENTS["meat"].label, type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addHandler={() => props.addHandler(ctrl.type)}
        removeHandler={() => props.removeHandler(ctrl.type)}
        enabled={props.enabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.purchaseHandler}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
