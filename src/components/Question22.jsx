import { useEffect } from "react";
import instanceOfAxios from "../services/axiosInstance22";
const Question22 = () => {
  useEffect(() => {
    instanceOfAxios
      .get("/users2")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  }, []);
  return <div>MyApp</div>;
};

export default Question22;
