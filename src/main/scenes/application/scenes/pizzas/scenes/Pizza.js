import React from "react";

export default function Pizza({ pizza }) {
  return (
    <div className="col-md-6">
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">{pizza.name}</h3>
          <p className="card-text mb-auto text-muted desc">
            {pizza.description}
          </p>
          <br />
          <p className="card-text mb-auto">Price:</p>
          <strong class="d-inline-block mb-2 text-success">
            {pizza.price} €
          </strong>
        </div>
        <img
          className="card-img-right flex-auto d-md-block img-card"
          data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]"
          src={"./pizza/" + `${pizza.id}` + ".jpg"}
          data-holder-rendered="true"
        />
      </div>
    </div>
  );
}
