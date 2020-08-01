import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/ui/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import INGREDIENTS from "../../components/Burger/Ingredients";

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
    purchasing: false,
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
      const newPrice = prevState.totalPrice + INGREDIENTS[type].price;
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
      const newPrice = prevState.totalPrice - INGREDIENTS[type].price;
      newIngredients[type]--;
      const newState = { ingredients: newIngredients, totalPrice: newPrice };
      return newState;
    });
    this.updatePurchaseState();
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    alert("That looks tasty!\n\nThank you for your order!");
  };

  render() {
    const enabledRemoveButtons = { ...this.state.ingredients };
    for (let key in enabledRemoveButtons) {
      enabledRemoveButtons[key] = enabledRemoveButtons[key] > 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalCloseHandler={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            cancelHandler={this.purchaseCancelHandler}
            continueHandler={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          addHandler={this.addIngredientHandler}
          removeHandler={this.removeIngredientHandler}
          enabled={enabledRemoveButtons}
          purchaseable={this.state.purchaseable}
          purchaseHandler={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
