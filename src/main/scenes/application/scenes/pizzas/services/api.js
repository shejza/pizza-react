import { headersFormData } from "../../../../../../helpers/headers-form-data";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  getPizzas,
  addPizza,
};

function getPizzas() {
  const requestUrl = `${apiUrl}pizzas`;
  const requestOptions = {
    method: "GET",
    headersFormData,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function addPizza(formValues) {
  const formData = new FormData();
  console.log(formValues);
  formData.append("quantity", formValues.quantity);
  formData.append("price", formValues.price);
  formData.append("pizza_id", formValues.id);
  const requestUrl = `${apiUrl}pizzas`;

  const requestOptions = {
    method: "POST",
    headersFormData,
    body: formData,
  };
  console.log(requestUrl);
  console.log(formValues);
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}
