import { useState } from "react";
import axios from "axios";
function useSubmitExam() {
  const [response, setResponse] = useState();
  // console.log();

  async function onSubmitExam(data) {
    await axios
      .post("http://localhost:5000/api/v1", JSON.stringify(data), {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response) => {
        // console.log(response.data);
        setResponse(JSON.stringify(response.data));
        localStorage.setItem("response", JSON.stringify(response.data));
      });
  }

  return [response, onSubmitExam];
}

export default useSubmitExam;
