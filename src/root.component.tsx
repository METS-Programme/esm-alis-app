import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlisTestsOrderedComponent from "./alis-component/alis-tests-ordered.component";

const Root: React.FC = () => {
  return (
    <BrowserRouter basename={window.getOpenmrsSpaBase()}>
      <Routes>
        <Route path="home/alis" element={<AlisTestsOrderedComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
