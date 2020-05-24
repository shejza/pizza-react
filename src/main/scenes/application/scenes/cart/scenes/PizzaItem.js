import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";

export default function PizzaItem({ pizza, deleteItem }) {
  const dispatch = useDispatch();

  const [quantity] = useState(pizza.quantity);

  const [price_order] = useState(pizza.price_order);

  const quantityIncrement = () => {
    const _pizza = {
      ...pizza,
      quantity: quantity + 1,
      price_order: pizza.price * (quantity + 1),
    };
    dispatch(actions.increment(_pizza));
  };

  const quantityDecrement = () => {
    const _pizza = {
      ...pizza,
      quantity: quantity - 1,
      price_order: parseFloat(price_order - pizza.price).toFixed(2),
    };
    dispatch(actions.increment(_pizza));
  };

  return (
    <div
      className={"col-md-6 mb-20" + (quantity === 0 ? " d-none" : "")}
      key={pizza.id}
    >
      <div className="card flex-md-row mb-4 box-shadow h-md-250 pizza__cards">
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-25">{pizza.name}</h3>
          <div className="quantity__pizza">
            <p className="card-text text-muted quantity-txt">
              Quantity: <span className="text-primary">{quantity}</span>
            </p>
            <div class="button__wrapper">
              <button
                type="button"
                onClick={quantityIncrement}
                class="btn btn-secondary btn-sm btn-plus"
              >
                +
              </button>

              {quantity === 1 ? (
                <button
                  type="button"
                  onClick={() => deleteItem(pizza.id)}
                  class="btn btn-danger btn-sm btn-minus"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  type="button"
                  onClick={quantityDecrement}
                  class="btn btn-secondary btn-sm btn-minus"
                >
                  -
                </button>
              )}
            </div>
          </div>
          <div className="price__btn">
            <div>
              <p className="card-text mb-auto">Price:</p>

              <strong className="d-inline-block mb-2 text-success">
                {price_order} €
              </strong>
            </div>
          </div>
        </div>
        <img
          className="card-img-right flex-auto d-md-block img-card img-card2"
          data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]"
          src={"../pizza/" + `${pizza.pizza_id}` + ".jpg"}
          data-holder-rendered="true"
        />
      </div>
    </div>
  );
}
