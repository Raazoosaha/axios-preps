import { useEffect } from "react";
import axios from "axios";
import "../App.css";
import axiosInstance from "../services/axiosInstance";
import Child from "./Child";
function Parent() {
  //Axios Interceptors
  axios.interceptors.request.use(
    (config) => {
      config.headers["X-Content-Url"] = "application/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (config) => {
      config.headers["Custom-Header"] = "Custom Data";
      return config;
    },
    (error) => Promise.reject(error)
  );

  //Axios get using asyn/await
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
    })();
  }, []);

  //using then..
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.info(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Axios insantace to make it reusable
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("users");
      console.info(response.data);
    })();
  }, []);
  return (
    <>
      Preps <Child />
    </>
  );
}

export default Parent;
