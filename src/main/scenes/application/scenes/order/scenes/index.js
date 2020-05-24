import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";
import { Link } from "react-router-dom";

export default function Order() {
  const dispatch = useDispatch();

  const formDefaultValues = {
    address: "",
    contact: "",
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { address, contact } = formValues;
  let [visibility, setVisibility] = useState(false);

  function handleChange(e) {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibility(true);
    setTimeout(() => {
      setVisibility(false);
    }, 7000);
    dispatch(actions.register(formValues));
    setFormValues({ address: "", contact: "" });
  };

  return (
    <React.Fragment>
      <div className="container">
        {visibility && (
          <div className="alert alert-success" role="alert">
            Your order is now completed!
            <Link
              to={{
                pathname: "/",
              }}
              tabIndex="-1"
              className="btn btn-sm btn-link"
            >
              Go To HomePage
            </Link>
          </div>
        )}
        <div className="row mb-2">
          <div className="col-md-8">
            <h3 class="pb-3 mb-4 font-italic border-bottom">Your Order:</h3>
          </div>
        </div>

        <section id="content" className="m-t-lg wrapper-md animated fadeInDown">
          <div className="row m-n">
            <div className="col-md-4 col-md-offset-4 m-t-lg">
              <section className="panel">
                <form onSubmit={handleSubmit} className="panel-body">
                  <div className="form-group">
                    <label className="control-label">Your Address</label>
                    <input
                      type="text"
                      placeholder="Street 24"
                      className="form-control"
                      value={address}
                      name={"address"}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Your Contact Number</label>
                    <input
                      type="text"
                      placeholder="+383333111"
                      className="form-control"
                      value={contact}
                      name={"contact"}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-info mb40">
                    Complete Order
                  </button>
                </form>
              </section>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
