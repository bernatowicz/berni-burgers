import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/ui/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.25,
  bacon: 0.95,
  cheese: 0.45,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4.25,
    purchasable: false,
  };

  updatePurchaseState() {
    this.setState((prevState) => {
      const ingredients = { ...prevState.ingredients };
      const sum = Object.keys(ingredients).reduce((accum, type) => {
        return accum + ingredients[type];
      }, 0);

      this.setState({ purchaseable: sum > 0 });
    });
  }

  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      const newIngredients = { ...prevState.ingredients };
      const newPrice = prevState.totalPrice + INGREDIENT_PRICES[type];
      newIngredients[type]++;
      const newState = { ingredients: newIngredients, totalPrice: newPrice };
      return newState;
    });
    this.updatePurchaseState();
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] < 1) {
      return;
    }

    this.setState((prevState) => {
      const newIngredients = { ...prevState.ingredients };
      const newPrice = prevState.totalPrice - INGREDIENT_PRICES[type];
      newIngredients[type]--;
      const newState = { ingredients: newIngredients, totalPrice: newPrice };
      return newState;
    });
    this.updatePurchaseState();
  };

  render() {
    const enabledRemoveButtons = { ...this.state.ingredients };
    for (let key in enabledRemoveButtons) {
      enabledRemoveButtons[key] = enabledRemoveButtons[key] > 0;
    }

    return (
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          addHandler={this.addIngredientHandler}
          removeHandler={this.removeIngredientHandler}
          enabled={enabledRemoveButtons}
          purchaseable={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
