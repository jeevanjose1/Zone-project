import React from "react";
import "./expenditureStyle.scss";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  secondchartConfig,
  simpleLineGraph,
  simpleLineGraphTwo,
} from "../../../utilities/chart";

const Expenditure = () => {
  return (
    <div className="expenditure">
      <div className="expenditure-container">
        <div className="payment-limit">
          <div className="head">
            <span>Internet payment limit</span>
            <p>$1,200 / 3,000</p>
          </div>
          <div className="expense">
            <div className="slider-wrapper">
              <div className="slider"></div>
            </div>
          </div>
        </div>

        <div className="graph">
          <div className="income expense-graph">
            <div className="chart">
              {/* chartjs line graph */}
              <Line data={simpleLineGraph} options={secondchartConfig} />
            </div>
            <div className="detials">
              <p>income</p>
              <h3>$5,700</h3>
            </div>
          </div>
          <div className="spending expense-graph">
            <div className="chart">
              {/* chartjs line graph */}
              <Line data={simpleLineGraphTwo} options={secondchartConfig} />
            </div>
            <div className="detials">
              <p>income</p>
              <h3>$5,700</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenditure;
