import React, { useState, useEffect } from "react";
import InputText from "../input/InputText";
import useGetSubmission from "./custom-hooks/getReview";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

function ReviewSub() {
  const [grade, setGrade] = useState("");
  const [responseToGrade, setResponseToGrade] = useGetSubmission();
  const [currentSubId, setCurrentSubId] = useGetSubmission();

  useEffect(() => {
    const currentUserId = JSON.parse(localStorage.getItem("response"));
    console.log(currentUserId);
    setResponseToGrade(currentUserId.data?._id);
  }, []);

  // const yusuff = JSON.parse(responseToGrade);
  async function func() {
    try {
      const data = await JSON.parse(responseToGrade);
      console.log(data);
      setCurrentSubId(data);
    } catch (e) {}
  }
  useEffect(() => {
    func();
  }, []);
 
  const reviewData = currentSubId?.data;
  console.log(currentSubId);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Grade Peer</h1>
      <InputText
        // value={reviewData?.email}
        // placeholder={email}
        type="text"
        disabled={true}
      />
      <InputText placeholder="Topic" type="text" disabled={true} />
      <InputText placeholder="Session Link" type="text" disabled={true} />
      <InputText
        placeholder="Grade (100%)"
        type="number"
        onInputChange={(event) => setGrade(event.target.value)}
      />
      <InputText type="submit" value="Submit Review" id="submit-button" />
    </div>
  );
}

export default ReviewSub;
