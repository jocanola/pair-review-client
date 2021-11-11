import React, { useEffect, useState } from "react";
import "./App.css";
import Submission from "./components/submission/Submission";
import ReviewSub from "./components/Review/ReviewSub";

import { useLocation, Routes, Route } from "react-router-dom";
import Grade from "./components/Grade/Grade";
import RequestReview from "./components/Review/RequestReview";
export default function App() {
  const [responseData, setResponse] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getDataFromLS = JSON.parse(localStorage.getItem("response"));
    setResponse(getDataFromLS?.data);
  }, [location.pathname]);
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={responseData ? <Grade /> : <Submission />}
          />
          <Route exact path="/review" element={<ReviewSub />} />
          <Route exact path="/requestSub" element={<RequestReview />} />
        </Routes>
      </div>
    </div>
  );
}
