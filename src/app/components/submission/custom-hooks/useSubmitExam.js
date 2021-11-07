import { useState } from "react";
import axios from "axios";
function useSubmitExam() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  // console.log();

  async function onSubmitExam(data) {
    setLoading(true);
    console.log(data);
    await axios
      .post(
        "https://schoolhouse-th.herokuapp.com/api/v1",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      )
      .then((response) => {
        setLoading(false);
        setResponse(JSON.stringify(response.data));
        localStorage.setItem("response", JSON.stringify(response.data));
      });
  }

  return [response, loading, onSubmitExam];
}

export default useSubmitExam;
