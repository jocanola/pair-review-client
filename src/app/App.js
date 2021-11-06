import React from "react";
import "./App.css";
import Submission from "./components/submission/Submission";
import ReviewSub from "./components/Review/ReviewSub";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Submission />} />
            <Route exact path="/review" element={<ReviewSub />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
