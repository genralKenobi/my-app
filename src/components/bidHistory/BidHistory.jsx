import React from "react";
import BidHistoryTable from "./BidHistoryTable";
import "./bidHistory.css";

const BidHistory = () => {
  return (
    <>
      <div className="gamerate-container">
        <BidHistoryTable />
      </div>
    </>
  );
};

export default BidHistory;
