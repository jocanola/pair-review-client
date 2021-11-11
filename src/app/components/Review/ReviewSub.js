import React, { useState, useEffect } from "react";
import InputText from "../input/InputText";
import useSubmitGrade from "./custom-hooks/useSubmitGrade";
import { useNavigate } from "react-router-dom";

function ReviewSub() {
  const [response, onPostGrade] = useSubmitGrade(null);
  const [submissionData, setSubmissionData] = useState();
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  // const { email, topic, sessionLink, ...others } = responseToGrade?.data;
  // const id = responseToGrade?.data?._id;

  const id = submissionData?._id;
  console.log(id);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Grade Peer</h1>

      <InputText
        placeholder={submissionData?.email}
        type="text"
        disabled={true}
      />
      <InputText
        placeholder={submissionData?.topic}
        type="text"
        disabled={true}
      />
      <InputText
        placeholder={submissionData?.sessionLink}
        type="text"
        disabled={true}
      />
      <InputText
        placeholder="Grade (100%)"
        type="text"
        onInputChange={(event) => setGrade(event.target.value)}
        grade
      />

      <InputText
        type="submit"
        value="Submit Review"
        id="submit-button"
        onClick={() => onPostGrade(id, grade)}
      />
    </div>
  );
}

export default ReviewSub;
