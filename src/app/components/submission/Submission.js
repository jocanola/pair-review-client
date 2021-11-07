import React, { useState, useEffect } from "react";
import InputText from "../input/InputText";
import Grade from "../Grade/Grade";
import useSubmitExam from "./custom-hooks/subFunc";
// import Button from "../Botton/Button";
function Submission() {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [response, loading, onSubmitExam] = useSubmitExam(null);
  const [sessionLink, setSessionLink] = useState("");
  const [responseData, setResponse] = useState(null);

  //data pass to the hook
  const data = { email, topic, sessionLink };
  useEffect(() => {
    const getDataFromLS = JSON.parse(localStorage.getItem("response"));
    setResponse(getDataFromLS?.data);
  }, []);
  return (
    <div className="submission">
      <h1 style={{ textAlign: "center" }}>
        Exam Session {!response ? "Submitted" : null}
      </h1>
      {!responseData ? (
        <>
          <InputText
            placeholder="Email"
            type="text"
            onInputChange={(event) => setEmail(event.target.value)}
          />
          <InputText
            placeholder="Topic"
            type="text"
            onInputChange={(event) => setTopic(event.target.value)}
          />
          <InputText
            placeholder="Session Link"
            type="text"
            onInputChange={(event) => setSessionLink(event.target.value)}
          />
          <InputText
            type="submit"
            value={!loading ? "Submit" : "Loading..."}
            id="submit-button"
            placeholder="Session Link"
            disabled={loading}
            onClick={() => {
              onSubmitExam(data);
              // window.location.reload();
            }}
          />
        </>
      ) : (
        <Grade grade={response?.data?.grade} />
      )}
    </div>
  );
}

export default Submission;
