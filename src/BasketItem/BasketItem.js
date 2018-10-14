import React from "react";
import "./BasketItem.css";

const BasketItem = ({
  image,
  itemId,
  name,
  quantity,
  price,
  deleteItem,
  updateQuantity
}) => (
  <div className="product">
    <img className="product-img" src={image} alt={name} />
    <div className="product-body">
      <h3>Product Name</h3>
      <span className="price">£{price}</span>
      <div className="actions">
        <span
          href="#0"
          className="delete-item"
          onClick={() => {
            deleteItem(itemId);
          }}
        >
          Delete
        </span>
        <div className="quantity">
          <label htmlFor="cd-product-8">Qty</label>
          <span className="select">
            <select
              id="cd-product-8"
              name="quantity"
              onChange={e => {
                updateQuantity(itemId, e);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default BasketItem;
