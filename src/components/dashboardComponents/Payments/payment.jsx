import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile1 from "../../../assets/images/profile1.jpg";
import profile2 from "../../../assets/images/profile2.jpg";
import profile3 from "../../../assets/images/profile3.jpg";
import profile4 from "../../../assets/images/profile4.jpg";
import React from "react";
import "./paymentStyle.scss";

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment">
        <div className="head">
          <h3>Send money to</h3>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <div className="line"></div>

        <div className="content">
          <button className="add-payment">
            
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <a className="recent-payments" href="#">
            <img src={profile1} alt="" />
          </a>
          <a className="recent-payments" href="#">
            <img src={profile2} alt="" />
          </a>
          <a className="recent-payments" href="#">
            <img src={profile3} alt="" />
          </a>
          <a className="recent-payments" href="#">
            <img src={profile4} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
