import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function Login() {
  const dispatch = useDispatch();

  const formDefaultValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { email, password } = formValues;

  function handleChange(e) {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actions.login(formValues));
  };

  return (
    <React.Fragment>
      <section id="content" class="m-t-lg wrapper-md animated fadeInUp">
        <a className="nav-brand" href="index.html">
          todo
        </a>
        <div className="row m-n">
          <div className="col-md-4 col-md-offset-4 m-t-lg">
            <section className="panel">
              <header className="panel-heading text-center"> Sign in </header>
              <form onSubmit={handleSubmit} className="panel-body">
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input
                    type="email"
                    placeholder="test@example.com"
                    class="form-control"
                    value={email}
                    name={"email"}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Password</label>
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
                  Sign in
                </button>
                <div className="line line-dashed"></div>
                <div className="line line-dashed"></div>
                <p className="text-muted text-center">
                  <small>Do not have an account?</small>
                </p>
                <Link
                  to={{
                    pathname: "/register",
                  }}
                  tabIndex="-1"
                  className="btn btn-white btn-block"
                >
                  Create an account
                </Link>
              </form>
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
