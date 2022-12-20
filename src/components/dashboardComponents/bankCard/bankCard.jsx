import React from "react";
import "./bankCard.scss";
import mastercard from "../../../assets/images/Mastercard-Logo.svg";

const BankCard = () => {
  return (
    <div className="bank-card">
      <div className="bank-card-container">
        <div className="head">
          <h4>Availiable balance</h4>
          <div className="slide-btn">
            <span>Credit</span>
            <div className="btn">
              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
            </div>
          </div>
        </div>
        <div className="amount">
          <h1>$12,234</h1>
        </div>
        <div className="account-number">
          <p>**** 4532</p>

          <img src={mastercard} alt="card logo" className="card-logo" />
        </div>
      </div>
    </div>
  );
};

export default BankCard;
