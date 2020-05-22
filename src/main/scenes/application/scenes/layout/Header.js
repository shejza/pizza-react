import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isCart, setCart] = useState(true);
  useEffect(() => {
    if (window.location.pathname.includes(`http://127.0.0.1:8000/api/cart`)) {
      console.log("ok");
      setCart(true);
    } else {
      setCart(false);
    }
  }, [isCart, setCart]);
  return (
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1"></div>
        <div class="col-4 text-center">
          <a class="blog-header-logo text-dark" href="#">
            The Yummi Pizza
          </a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <Link
            to={{
              pathname: "/cart",
            }}
            tabIndex="-1"
            className="btn btn-sm btn-outline-secondary"
          >
            {isCart ? "sausd" : " GO TO CARTS"}
          </Link>
        </div>
      </div>
    </header>
  );
}
