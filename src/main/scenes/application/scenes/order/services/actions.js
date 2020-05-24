import { apiCalls } from "./api";

export const actions = {
  register,
};

function register(formValues) {
  return (dispatch) => {
    apiCalls.getRegister(formValues).then((data) => {
      dispatch(success());
    });
  };

  function success() {
    return {
      type: "REGISTER_SUCCESS",
    };
  }
}
