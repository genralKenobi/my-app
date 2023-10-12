import React from "react";
import "./winHistory.css";
import WinHistoryTable from "./WinHistoryTable";

const WinHistory = () => {
  return (
    <>
      <div className="gamerate-container">
        <WinHistoryTable />
      </div>
    </>
  );
};

export default WinHistory;
