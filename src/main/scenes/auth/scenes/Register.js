import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function Register() {
  const dispatch = useDispatch();

  const formDefaultValues = {
    email: "",
    name: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { email, name, password } = formValues;

  function handleChange(e) {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.register(formValues));
  };
  return (
    <React.Fragment>
      <section id="content" className="m-t-lg wrapper-md animated fadeInDown">
        <a className="nav-brand" href="index.html">
          todo
        </a>
        <div className="row m-n">
          <div className="col-md-4 col-md-offset-4 m-t-lg">
            <section className="panel">
              <header className="panel-heading bg bg-primary text-center">
                Sign up
              </header>
              <form onSubmit={handleSubmit} className="panel-body">
                <div className="form-group">
                  <label className="control-label">Display name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="form-control"
                    value={name}
                    name={"name"}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Your email address</label>
                  <input
                    type="email"
                    placeholder="test@example.com"
                    className="form-control"
                    value={email}
                    name={"email"}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Type a password</label>

                  <input
                    type="password"
                    id="inputPassword"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    name={"password"}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-info">
                  Sign up
                </button>
                <div className="line line-dashed"></div>
                <p className="text-muted text-center">
                  <small>Already have an account?</small>
                </p>
                <Link
                  to={{
                    pathname: "/login",
                  }}
                  tabIndex="-1"
                  className="btn btn-white btn-block"
                >
                  Sign in
                </Link>
              </form>
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
