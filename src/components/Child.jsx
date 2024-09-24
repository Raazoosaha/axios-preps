import { useEffect } from "react";
import axios from "axios";
import axiosRetry from "axios-retry";
const Child = () => {
  //Timeout
  const axiosConfig = {
    timeout: 5000,
  };
  //This retry will be added to all axios
  axiosRetry(axios, {
    retries: 3,
    retryDelay: (retryCount) => {
      return Math.pow(2, retryCount) * 1000;
    },
    shouldResetTimeout: true,
    retryCondition: (error) => {
      return error.code === "ECONNABOURTED" || error.response.status === 500;
    },
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1", axiosConfig)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);
  return <div>Child</div>;
};

export default Child;
