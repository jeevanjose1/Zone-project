import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./latestSpendingCardStyle.scss";



const LatestSpendingCard = ({title,amount,icons}) => {
  return (
    <div className="card-container">
      <div className="detials">
        <div className="icon">
          <FontAwesomeIcon icon={icons} size='lg' />
        </div>
        <div className="content">
        <h3>{title}</h3>
        <p>May 25, 2022 at 4:20AM</p>
        </div>
       
      </div>
      <div className="amount">
        <p>{amount}</p>
        <FontAwesomeIcon icon={faChevronRight} size='xl'/>
      </div>
    </div>
  );
};

export default LatestSpendingCard;
