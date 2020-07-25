import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      const newIngredients = { ...prevState.ingredients };

      newIngredients[type]++;

      const newState = { ingredients: newIngredients };
      return newState;
    });
  };

  removeIngredientHandler = (type) => {
    this.setState((prevState) => {
      const newIngredients = { ...prevState.ingredients };

      newIngredients[type]--;

      if (newIngredients[type] < 0) {
        newIngredients[type] = 0;
      }

      const newState = { ingredients: newIngredients };
      return newState;
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addHandler={this.addIngredientHandler}
          removeHandler={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
