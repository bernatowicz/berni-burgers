import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // Crazy complicated transformation below!
  //
  // Start by making an array of the object's keys to .map over.
  // For each key (k) which is an ingredient type:
  //   .map over an Array having a length matching the count of that ingredient (values, undefined!)
  //   Because values of the array are undefined, so we don't care about the values, only the index i
  //   Output the JSX component with a key prop having its type plus the index for uniquness
  //   and its type prop = k.
  //
  //   This is an array of arrays, so flatten it with .reduce() so we can easily see if it is empty.
  //
  // ingredients: {
  //     salad: 1,
  //     bacon: 2,
  //     cheese: 2,
  //     meat: 2,
  //   },
  //
  // transforms into:
  //
  // <BurgerIngredient key="salad0" type="salad" />
  // <BurgerIngredient key="bacon0" type="bacon" />
  // <BurgerIngredient key="bacon1" type="bacon" />
  // <BurgerIngredient key="cheese0" type="cheese" />
  // <BurgerIngredient key="cheese1" type="cheese" />
  // <BurgerIngredient key="meat0" type="meat" />
  // <BurgerIngredient key="meat1" type="meat" />

  let transformedIngredients = Object.keys(props.ingredients)
    .map((k) => {
      return [...Array(props.ingredients[k])].map((dontCare, i) => {
        return <BurgerIngredient key={k + i} type={k} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });

  // console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>
        This sure is a lean burger!
        <br />
        Try adding some ingredients.
      </p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
