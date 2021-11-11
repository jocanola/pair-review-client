import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useRequestSub from "./custom-hooks/useRequestSub";

function RequestReview(props) {
  const [subToGrade, onRequestSubToGrade] = useRequestSub();
  const [avaibale, setAvailable] = useState(null);
  const navigate = useNavigate();

  const requestReview = () => {
    const currentUserSubId = JSON.parse(localStorage.getItem("response"));
    const subId = currentUserSubId?.data?._id;
    onRequestSubToGrade(subId);
  };

  useEffect(() => {
    const data = localStorage.getItem("sub");
    // console.log(data);
    if (data !== "undefined") {
      const subData = JSON.parse(localStorage.getItem("sub"));
      setAvailable(subData);
    } else {
      setAvailable(undefined);
    }
  }, []);

  console.log(avaibale);
  if (avaibale === "undefined") {
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Review Submission</h1>
      <h1 style={{ padding: 23, textAlign: "center" }}>
        {" "}
        No Submission is ready to be reviewed check back{" "}
      </h1>
      <button id="submit-button" onClick={() => navigate("/requestSub")}>
        Review Another Submission
      </button>
    </div>;
  }
  return (
    <button id="submit-button" onClick={requestReview}>
      Request Peer Review
    </button>
  );
}

export default RequestReview;
