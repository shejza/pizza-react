import { headersFormData } from "../../../../../../helpers/headers-form-data";
import { apiUrl } from "../../../../../../helpers/api-url";

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
  formData.append("id", formValues.id);
  formData.append("pizza_id", formValues.pizza_id);
  console.log(formValues);
  const requestUrl = `${apiUrl}pizzas`;

  const requestOptions = {
    method: "POST",
    headersFormData,
    body: formData,
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}
