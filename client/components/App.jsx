import React from "react";
import ReactDOM from "react-dom";
import RecruiterMain from "./RecruiterMain/RecruiterMain.jsx";
import RecruiterHeader from "./RecruiterHeader/RecruiterHeader.jsx";

const App = () => {
  return (
    <div>
      <h1>CommonApp</h1>
      <RecruiterHeader />
      <RecruiterMain />
    </div>
  );
};

export default App;
