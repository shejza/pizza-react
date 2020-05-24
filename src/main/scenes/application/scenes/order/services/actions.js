import { apiCalls } from "./api";

export const actions = {
  register,
};

function register(formValues) {
  return (dispatch) => {
    apiCalls.getRegister(formValues).then((data) => {
      console.log(formValues);
      dispatch(success());
      window.location.href = "/";
    });
  };

  function success() {
    return {
      type: "REGISTER_SUCCESS",
    };
  }
}
