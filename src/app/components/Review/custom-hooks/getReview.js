import { useState } from "react";
import axios from "axios";
function useGetSubmission() {
  const [responseToGrade, setResponseToGrade] = useState();
  // console.log();

  async function onGetSubmission(id) {
    //   const {} = data;
    await axios
      .get(`http://localhost:5000/api/v1/6185741bf740975211669243`, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response) => {
        setResponseToGrade(JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data.data));
      });
  }

  return [responseToGrade, onGetSubmission];
}

export default useGetSubmission;
