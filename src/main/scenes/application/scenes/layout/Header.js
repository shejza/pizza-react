import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1"></div>
        <div className="col-4 text-center">
          <Link
            to={{
              pathname: "/",
            }}
            tabIndex="-1"
            className="blog-header-logo text-dark"
          >
            The Yummi Pizza
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Link
            to={{
              pathname: "/cart",
            }}
            tabIndex="-1"
            className="btn btn-sm btn-outline-secondary"
          >
            GO TO CARTS
          </Link>
        </div>
      </div>
    </header>
  );
}
