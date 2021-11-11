import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function useRequestSub() {
  const [subToGrade, setSubToGrade] = useState();
  const navigate = useNavigate();
  // console.log();

  async function onRequestSubToGrade(id) {
    console.log(id);
    await axios
      .get(`https://schoolhouse-th.herokuapp.com/api/v1/${id}`, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response) => {
        setSubToGrade(response.data);
        localStorage.setItem("sub", JSON.stringify(response.data.data));
        navigate("/review");
      });

    console.log(subToGrade);
    // navigate("/review");
  }
  console.log(subToGrade);
  return [subToGrade, onRequestSubToGrade];
}

export default useRequestSub;
