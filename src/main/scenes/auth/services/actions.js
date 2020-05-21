import { apiCalls } from "./api";

export const actions = {
  register,
  login,
};

function register(formValues) {
  return (dispatch) => {
    apiCalls.getRegister(formValues).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));

      dispatch(success());
      window.location.href = "/login";
    });
  };

  function success() {
    return {
      type: "REGISTER_SUCCESS",
    };
  }
}

function login(formValues) {
  return (dispatch) => {
    apiCalls.getLogin(formValues).then(
      (response) => {
        localStorage.setItem("user", JSON.stringify(response.data));

        dispatch(success());
        window.location.href = "/app/tasks";
      },
      (error) => {}
    );
  };

  function success() {
    return {
      type: "LOGIN_SUCCESS",
    };
  }
}
