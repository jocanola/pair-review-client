import { useEffect, useState } from "react";

function Grade() {
  const [response, setResponse] = useState(null);

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
    </center>
  );
}

export default Grade;
