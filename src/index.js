import React, { Component } from "react";
import ReactDOM from "react-dom";
import uuidv4 from "uuid/v4";

import Button from "./Button/Button.js";
import Basket from "./Basket/Basket.js";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      cartHasItems: true,
      cartItemCounter: 0,
      total: 0
    };
  }

  newItem = () => {
    return [
      {
        image:
          "https://uploads.codesandbox.io/uploads/user/8376ca59-5f4b-405f-9af9-a738a9ee679d/IImJ-image-placeholder.png",
        itemId: uuidv4(),
        name: "Product Name",
        quantity: 1,
        price: 14.99
      }
    ];
  };

  addToCart = () => {
    this.setState(prevState => {
      return {
        cartHasItems: true,
        cart: prevState.cart.concat(this.newItem()),
        cartItemCounter: prevState.cartItemCounter + 1
      };
    });
  };

  updateQuantity = (id, e) => {
    const newCart = this.state.cart.slice();
    const currentItem = newCart.find(item => item.itemId === id);
    currentItem.quantity = e.target.value;
    this.setState(() => {
      return {
        cart: newCart
      };
    });
  };

  removeFromCart = id => {
    this.setState(prevState => {
      if (prevState.cartItemCounter === 0) return;
      return {
        cartHasItems: prevState.cart.length <= 0 ? false : true,
        cart: prevState.cart.filter(cartItem => cartItem.itemId !== id),
        cartItemCounter: prevState.cartItemCounter - 1
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Add to Cart Interaction</h1>

        <Button onClick={this.addToCart} />
        <Basket
          updateQuantity={this.updateQuantity}
          deleteItem={this.removeFromCart}
          isShown={this.state.cartHasItems}
          itemCount={this.state.cartItemCounter}
          items={this.state.cart}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
