import { useState } from "react";
import axios from "axios";
function useGetSubmission() {
  const [responseToGrade, setResponseToGrade] = useState();
  // console.log();

  async function onGetSubmission(id) {
    //   const {} = data;
    await axios
      .get(`https://schoolhouse-th.herokuapp.com/api/v1/${id}`, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response) => {
        setResponseToGrade(response.data);
        localStorage.setItem("review", JSON.stringify(response.data.data));
      });
  }

  return [responseToGrade, onGetSubmission];
}

export default useGetSubmission;
