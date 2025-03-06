export const getLsAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const setLsAuthToken = (token: string) => {
  localStorage.setItem("authToken", token);
};
