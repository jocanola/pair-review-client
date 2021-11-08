import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function useSubmitExam() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
        navigate("/review");
      });
  }

  return [response, loading, onSubmitExam];
}

export default useSubmitExam;
