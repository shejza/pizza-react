import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";

export default function PizzaItem({ pizza }) {
  const dispatch = useDispatch();

  const [quantity, setCount] = useState(pizza.quantity);

  const quantityIncrement = () => {
    setCount(quantity + 1);
  };
  const quantityDecrement = () => {
    setCount(quantity - 1);
  };

  return (
    <div className="col-md-6 mb-20">
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
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
              <button
                type="button"
                onClick={quantityDecrement}
                class="btn btn-secondary btn-sm btn-minus"
                disabled={quantity === 0 ? "true" : null}
              >
                -
              </button>
            </div>
          </div>
          <div className="price__btn">
            <div>
              <p className="card-text mb-auto">Price:</p>

              <strong className="d-inline-block mb-2 text-success">
                {pizza.price} €
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
