import { lineChartData,simpleLineGraphData,simpleLineGraphDataTwo } from "./dummyData";


// all line graph datas
export const simpleLineGraph = {
    labels: simpleLineGraphData.data,
    datasets: [
      {
        label: "",
        data:simpleLineGraphData.amount,
        fill: false,
        borderColor: "#47bec4",
        yAxisID: "y",
        tension: 0.5,
      },

    ],
  };


  export const simpleLineGraphTwo = {
    labels: simpleLineGraphDataTwo.data,
    datasets: [
      {
        label: "",
        data:simpleLineGraphDataTwo.amount,
        fill: false,
        borderColor: "#ef4464",
        yAxisID: "y",
        tension: 0.5,
      },

    ],
  };


  export const expenseChartData ={
 labels: lineChartData.date,
  datasets: [
    {
      label: "",
      data:  lineChartData.amount,
      fill: false,
      borderColor: "#ef4464",
      yAxisID: "y",
      tension: 0.5,
    },
    {
      label: "",
      data:  lineChartData.secondAmount,
      fill: false,
      borderColor: "#1d1a21",
      yAxisID: "y1",
      tension: 0.5,
    },
  ],

};


// all line graph configuration
export const chartConfig = {
  legend: {
    labels: {
      display: false,
    },
  },
  elements: {
    point: {
      radius:2,
      
    },
  },
  responsive: true,
  maintainAspectRatio:false,



  plugins: {
    legend: {
      display: false,
    },
  
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      
    },
    y: {
    
      grid: {
        display: false,
        borderWidth:0,
        drawBorder:false,
        drawOnChartArea:false,
        
      },
      
    },
    y1: {
      type: "linear",
      display: false,
      position: "right",

    
    },
  },
};

export const secondchartConfig = {
  legend: {
    labels: {
      display: false,
    },
  },
  elements: {
    point: {
      radius:0,
      
    },
  },
  responsive: true,
  


  plugins: {
    legend: {
      display: false,
    },
  
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      border:{
        display:false
      },
      ticks: {
        display: false
 }
      
    },
    y: {
      border:{
        display:false
      },
      grid: {
        display: false,
        borderWidth:0,
        drawBorder:false,
        drawOnChartArea:false,
        
      },
      ticks: {
        display: false
 }
      
    },
  },
};
