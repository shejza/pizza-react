var getToken = !!localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))["access_token"]
  : null;

export const headers = {
  Authorization: `Bearer ${getToken}`,
};
