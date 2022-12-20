import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import ExpenseLineGraph from './expenseChartComponents/expenseLineGraph'
import './expenseChartStyle.scss'


const ExpenseChart = () => {

  const [dropdownActive,setDropdownActive]=useState(false)

  const dropdownHandle =()=> ()=>{
    setDropdownActive(!dropdownActive)
  }
  
  return (
    <div className='expense-chart-container'>
      <div className="head">
        <h3>Expense Statistics</h3>
        <div className="dropdown">
          <span>Week</span>
           <FontAwesomeIcon className='dropdown-btn' icon={faChevronDown} onClick={dropdownHandle()} size='xl'/>
          <div className={dropdownActive?"contents content-active":"contents"}>
            <ul className='content-list'>
              <li className="list" >Weekly</li>
              <li className="list" >Monthly</li>
              <li className="list" >Yearly</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="graph">
         {/* chartjs line graph */}
       <ExpenseLineGraph />
      </div>
    </div>
  )
}

export default ExpenseChart