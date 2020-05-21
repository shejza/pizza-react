export const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) return Promise.reject((data && data) || response.status);
    return {
      data: data,
      error: response.status,
    };
  });
};
