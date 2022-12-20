import React from "react";
import BankCard from "../../components/dashboardComponents/bankCard/bankCard";
import Expenditure from "../../components/dashboardComponents/expenditureSection/expenditure";
import ExpenseChart from "../../components/dashboardComponents/expenseChart/expenseChart";
import LatestSpending from "../../components/dashboardComponents/latestSpendings/latestSpending";
import Payment from "../../components/dashboardComponents/Payments/payment";
import ScheduledPayments from "../../components/dashboardComponents/scheduledPayments/scheduledPayments";
import SideNavigationBar from "../../layouts/sideNavigationBar";

import "./dashboardStyle.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* side navigation menu component */}
        <SideNavigationBar />
      <div className="dashboard-container">
        <div className="dasboard-title">
          <h4>Dashboard</h4>
        </div>

        <div className="dashboard-content">
           <div className="left-side-content">
            {/* bank card component */}
            <BankCard/>
             {/* Internet payment limit component */}
           <Expenditure/>
            {/* Latest spendings component */}
           <LatestSpending/>
           </div>
           <div className="right-side-content">

            {/* Expense Statistics component */}
            <ExpenseChart/>
            {/* Send money component */}
            <Payment/>
            {/* Scheduled payments component */}
            <ScheduledPayments/>
           
      

           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
