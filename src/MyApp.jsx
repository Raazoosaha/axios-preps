import { useEffect } from "react";
import { retryInstance } from "./components/Instance";
import Question22 from "./components/Question22";
const MyApp = () => {
  useEffect(() => {
    retryInstance
      .get("/users")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Question22 />
    </div>
  );
};

export default MyApp;
