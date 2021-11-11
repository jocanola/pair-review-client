import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Grade() {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getDataFromLS = JSON.parse(localStorage.getItem("response"));
    setResponse(getDataFromLS?.data);
  }, []);

  return (
    <center>
      <h1 style={{ textAlign: "center" }}>Exam Session Submitted</h1>
      <h1 style={{ textAlign: "center" }}>
        And Successfully Review Colleague Submission
      </h1>
      <h3>
        Grade :{" "}
        {response?.grade?.length > 1 ? response?.grade : "Not Yet Available"}
      </h3>
      <button id="submit-button" onClick={() => navigate("/requestSub")}>
        Review Another Submission
      </button>
    </center>
  );
}

export default Grade;
