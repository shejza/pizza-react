import { headersFormData } from "../../../../helpers/headers-form-data";
import { handleResponse } from "../../../../helpers/handle-response";

export const apiCalls = {
  getRegister,
  getLogin,
};

function getRegister(formValues) {
  const formData = new FormData();

  formData.append("name", formValues.name);
  formData.append("email", formValues.email);
  formData.append("password", formValues.password);
  const requestOptions = {
    method: "POST",
    // headers: headersFormData,
    body: formData,
  };
  return fetch(
    "http://127.0.0.1:8000/register",
    requestOptions
  ).then((response) => response.json());
}

function getLogin(formValues) {
  const formData = new FormData();
  console.log(formValues);
  formData.append("username", formValues.email);
  formData.append("password", formValues.password);
  formData.append("grant_type", "password");
  formData.append("client_id", 3);
  formData.append("client_secret", "kKM6Ic2zGCaxSjokRDWYnIVQcpekCZmB29feSDH3");

  const requestOptions = {
    method: "POST",
    // headers: headersFormData,
    body: formData,
  };
  return fetch("http://127.0.0.1:8000/oauth/token", requestOptions).then(
    handleResponse
  );
}
