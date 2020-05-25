import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  getRegister,
};

function getRegister(formValues) {
  const formData = new FormData();
  console.log(formValues);
  formData.append("address", formValues.address);
  formData.append("contact", formValues.contact);

  const requestUrl = `${apiUrl}orders`;
  const requestOptions = {
    method: "POST",

    body: formData,
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}
