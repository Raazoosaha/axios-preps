import axios from "axios";
import axiosRetry from "axios-retry";
//instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

//instance with retry

const retryInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

axiosRetry(retryInstance, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
});
retryInstance.interceptors.response.use(null, (error) => {
  if (error.config && error.response && error.response.status >= 500) {
    return retryInstance.request(error.config);
  }
  return Promise.reject(error);
});
export { axiosInstance, retryInstance };
