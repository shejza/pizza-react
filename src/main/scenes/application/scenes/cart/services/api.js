import { headers } from "../../../../../../helpers/headers";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  getPizzas,
};

function getPizzas() {
  const requestUrl = `${apiUrl}order-details`;
  const requestOptions = {
    method: "GET",
    headers,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}


