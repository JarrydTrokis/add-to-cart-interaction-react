import React, { Component } from "react";
import BasketItem from "../BasketItem/BasketItem.js";
import "./Basket.css";

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      showIndicator: true,
      cartIsOpen: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      showIndicator: !prevState.showIndicator,
      cartIsOpen: !prevState.cartIsOpen
    }));
  };

  shouldShowIndicator = () => {
    if (this.props.itemCount > 0 && this.state.showIndicator) {
      return "isShown";
    }
    return "";
  };

  render() {
    const { isShown, itemCount, items, deleteItem, updateQuantity } = this.props;
    return (
      <section className={`${this.state.cartIsOpen ? "cartIsOpen" : null}`}>
        <a
          className={`basket ${isShown ? "isShown" : null}`}
          onClick={this.handleClick}
        >
          <span
            className={`counter ${this.shouldShowIndicator()}`}
          >{`${itemCount}`}</span>
          Basket
        </a>
        <article className="cart-container">
          <div className="cart-inner">
            {items.map(item => (
              <BasketItem key={item.itemId} deleteItem={deleteItem} updateQuantity={updateQuantity} {...item} />
            ))}
          </div>
          <footer className="cart-footer">
            <a className="checkout-button">
              {items.length &&
                items
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
            </a>
          </footer>
        </article>
      </section>
    );
  }
}

export default Basket;
