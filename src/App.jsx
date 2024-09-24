import { useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  //Axios Interceptors

  //Axios get using asyn/await
  useEffect(() => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/todos"),
      ])
      .then(
        axios.spread((postResponse, todoResponse) => {
          console.log(postResponse.data);
          console.log(todoResponse.data);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  //using then..

  return <>Preps</>;
}

export default App;
