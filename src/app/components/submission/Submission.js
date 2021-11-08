import React, { useState } from "react";
import InputText from "../input/InputText";

import useSubmitExam from "./custom-hooks/useSubmitExam";
// import Button from "../Botton/Button";
function Submission() {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [response, loading, onSubmitExam] = useSubmitExam(null);
  const [sessionLink, setSessionLink] = useState("");

  //data pass to the hook
  const data = { email, topic, sessionLink };

  return (
    <div className="submission">
      <h1 style={{ textAlign: "center" }}>Exam Session</h1>

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
    </div>
  );
}

export default Submission;
