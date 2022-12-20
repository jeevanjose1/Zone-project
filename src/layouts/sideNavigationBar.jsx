import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faSquarePollVertical,
  faArrowDownUpAcrossLine,
  faWallet,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import profile_image from "../assets/images/profile_picture.jpg";
import './sideNavigationBarStyle.scss'
const SideNavigationBar = () => {

// responsive menu toggle state and handle click function
  const [ sideNavActive , setSideNavActive]= useState(false);

  const sideNavOnClick = ()=>{
    setSideNavActive(!sideNavActive)
  }

  return (
    <>
    {/* responsive  menu */}
    <div className="mobile-menu" onClick={sideNavOnClick}>
      <div className="m-line"></div>
      <div className="m-line"></div>
      <div className="m-line"></div>
    </div>


    <div className={sideNavActive ? " side-navigation side-nav-active ":"side-navigation"}>
      <div className="side-navigation-container">
       <div className="top-section">
        <div className="logo">
          <img src={logo} alt="brand logo" />
        </div>

        <div className="user-detials">
          <div className="profile-picture">
            <img src={profile_image} alt="profile" />
          </div>
          <div className="detials">
            <span>Wellcome back,</span>
            <h3>Taylor Simora</h3>
          </div>
        </div>

        <div className="budget">
          <h2 className="count">$34,321</h2>
          <span>Monthly budget</span>
        </div>
        </div>
        <div className="navigation">
          <ul className="navigation-list">
            <li className="list">
              <a href="#" className="navigation-link">
                <FontAwesomeIcon className="nav-icons" icon={faChartPie} size='xl'/>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="navigation-link">
                <FontAwesomeIcon className="nav-icons" icon={faSquarePollVertical} size='xl'/>
                <span>Invstments</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="navigation-link">
                <FontAwesomeIcon className="nav-icons" icon={faArrowDownUpAcrossLine}size='xl' />
                <span>Transactions</span>
              </a>
            </li>
            <li className="list">
              <a href="#" className="navigation-link">
                <FontAwesomeIcon className="nav-icons" icon={faWallet} size='xl' />
                <span>Wallet</span>
              </a>
            </li>
          </ul>
        </div>


        <div className="logout">
          <button className="logout-btn">
          <FontAwesomeIcon className="nav-icons" icon={faRightFromBracket} size='xl' />
          
          Logout

          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNavigationBar;
