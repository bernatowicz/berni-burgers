import React from "react";
import Aux from "../../../hoc/Aux";
import INGREDIENTS from "../Ingredients";

const orderSummary = (props) => {
  const summaryList = Object.keys(props.ingredients).map((key, i) => {
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
      <ul>{summaryList}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
