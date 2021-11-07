import React, { useState, useEffect } from "react";
import InputText from "../input/InputText";
import useGetSubmission from "./custom-hooks/getReview";
import useReviewFunc from "./custom-hooks/reviewFunc";

function ReviewSub() {
  const [grade, setGrade] = useState("");
  const [responseToGrade, onGetSubmission] = useGetSubmission(null);
  const [response, onReviewSub] = useReviewFunc(null);
  // const [hasReview, setHasReview] = useState(false);

  useEffect(() => {}, []);

  const requestReview = () => {
    const currentUserSubId = JSON.parse(localStorage.getItem("response"));
    const subId = currentUserSubId?.data?._id;
    onGetSubmission(subId);
  };

  // const { email, topic, sessionLink, ...others } = responseToGrade?.data;
  const id = responseToGrade?.data?._id;

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Grade Peer</h1>
      {responseToGrade || response ? (
        <>
          <InputText
            placeholder={responseToGrade?.data?.email}
            type="text"
            disabled={true}
          />
          <InputText
            placeholder={responseToGrade?.data?.topic}
            type="text"
            disabled={true}
          />
          <InputText
            placeholder={responseToGrade?.data?.sessionLink}
            type="text"
            disabled={true}
          />
          <InputText
            placeholder="Grade (100%)"
            type="text"
            onInputChange={(event) => setGrade(event.target.value)}
          />

          <InputText
            type="submit"
            value="Submit Review"
            id="submit-button"
            onClick={() => onReviewSub(id, grade)}
          />
          <h3>{response?.message}</h3>
        </>
      ) : (
        <button id="submit-button" onClick={requestReview}>
          Request Peer Review
        </button>
      )}
    </div>
  );
}

export default ReviewSub;
