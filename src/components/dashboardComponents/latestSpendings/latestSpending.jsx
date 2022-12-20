import React from "react";
import LatestSpendingCard from "./latestSpendingComponents/latestSpendingCard";
import "./latestSpendingStyle.scss";
import {
  faCartShopping,
  faHouse,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const LatestSpending = () => {
  return (
    <div className="latest-spending-container">
      <div className="latest-spending">
        <div className="head">
          <h3>Latest spendings</h3>
          <a href="#">View all</a>
        </div>
        <div className="line"></div>
        <div className="spending-content">
          {/* latest spendings card components */}
          <LatestSpendingCard
            icons={faCartShopping}
            title="Online store"
            date=""
            amount="-$32.50"
          />
          <LatestSpendingCard
            icons={faHouse}
            title="Housekeeping"
            date=""
            amount="-$4.20"
          />
          <LatestSpendingCard
            icons={faTicket}
            title="Tickets"
            date=""
            amount="-$100.29"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestSpending;
