import React from "react";
import Aux from "../../../hoc/Aux";
import INGREDIENTS from "../Ingredients";
import Button from "../../ui/Button/Button";

const orderSummary = (props) => {
  const ingedientSummary = Object.keys(props.ingredients).map((key, i) => {
    return (
      <li key={key}>
        {INGREDIENTS[key].label}:{props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingedientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clickHandler={props.cancelHandler}>
        CANCEL
      </Button>
      <Button buttonType="Success" clickHandler={props.continueHandler}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
