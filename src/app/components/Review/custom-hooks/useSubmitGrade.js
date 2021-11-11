import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function useSubmitGrade() {
  const [response, setResponse] = useState();
  const navigate = useNavigate();
  // console.log();

  async function onPostGrade(id, grade) {
    const data = {
      grade,
      reviewed: true,
    };
    console.log(data);
    await axios
      .put(
        `https://schoolhouse-th.herokuapp.com/api/v1/review/${id}`,
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      )
      .then((response) => {
        setResponse(JSON.stringify(response.data));
        navigate("/");
      });
  }

  console.log(response);

  return [response, onPostGrade];
}

export default useSubmitGrade;
