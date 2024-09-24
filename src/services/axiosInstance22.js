import axios from "axios";

const instanceOfAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
//1. Create a custom error class extending the native error to handle error and provide additional context

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

//2. Utilized the Axios interceptors to centralized the error handling logic

// function
function handleError(error) {
  if (error.response) {
    const { status, data } = error.response;
    switch (status) {
      case 400:
        throw new CustomError("Bad Request", status);
      case 404:
        throw new CustomError("Not Found", status);
      default:
        throw new CustomError("Unknown Error", status);
    }
  } else {
    throw new CustomError("Network Error", null);
  }
}
instanceOfAxios.interceptors.response.use(
  (response) => response,
  (error) => handleError(error)
);

export default instanceOfAxios;
