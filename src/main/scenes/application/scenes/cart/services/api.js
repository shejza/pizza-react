import { headersFormData } from "../../../../../../helpers/headers-form-data";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  getPizzas,
  updatePizza,
  deleteItem,
};

function getPizzas() {
  const requestUrl = `${apiUrl}order-details`;
  const requestOptions = {
    method: "GET",
    headersFormData,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function updatePizza(formValues) {
  const formData = new FormData();

  formData.append("quantity", formValues.quantity);
  formData.append("price_order", formValues.price_order);
  formData.append("pizza_id", formValues.id);
  const requestUrl = `${apiUrl}order-details`;

  const requestOptions = {
    method: "POST",
    headersFormData,
    body: formData,
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function deleteItem(id) {
  const requestUrl = `${apiUrl}order-details/${id}`;

  const requestOptions = {
    method: "DELETE",
    headersFormData,
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}
