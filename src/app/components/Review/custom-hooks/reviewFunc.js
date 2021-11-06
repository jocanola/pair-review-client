import { useState } from "react";
import axios from "axios";
function useReviewFunc() {
  const [response, setResponse] = useState();
  // console.log();

  
  async function onReviewSub(data) {
    //   const {} = data;
    await axios
      .post("http://localhost:5000/api/v1", JSON.stringify(data), {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response) => {
        setResponse(JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
      });
  }

  return [response, onReviewSub];
}

export default useReviewFunc;
