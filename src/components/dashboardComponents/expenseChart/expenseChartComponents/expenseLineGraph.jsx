import React from "react";
import "./expenseLineGraphStyle.scss";
import {  Line } from "react-chartjs-2";
import { chartConfig, expenseChartData } from "../../../../utilities/chart";

const ExpenseLineGraph = () => {
 {/* chartjs line graph */}
  return <Line data={expenseChartData} options={chartConfig} />;
};

export default ExpenseLineGraph;
