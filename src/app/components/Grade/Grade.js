import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Grade() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const getDataFromLS = JSON.parse(localStorage.getItem("response"));
    setResponse(getDataFromLS?.data);
  }, []);
  const navigate = useNavigate();
  const navigateToReview = () => {
    navigate("/review");
  };
  return (
    <center>
      <h3>
        Grade :{" "}
        {response?.grade?.length > 1 ? response?.grade : "Not Yet Available"}
      </h3>
      <button id="submit-button" onClick={navigateToReview}>
        Review Peer
      </button>
    </center>
  );
}

export default Grade;
