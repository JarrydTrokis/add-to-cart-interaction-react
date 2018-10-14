import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick} className="button">
        Add to cart
      </button>
    );
  }
}

export default Button;
