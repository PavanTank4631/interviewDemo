import CanvasJSReact from './canvasCharts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart5 = ({ name, xAxis, chartData }) => {
  const options = {
    height: 350,
    width: 999,
    animationEnabled: true,
    axisY: {
      title: "Body Temprature"
    },
    data: [
      {
        type: "splineArea",
        xValueFormatString: "YYYY",
        yValueFormatString: "#%",
        dataPoints: [
          {label: "Week1", y: 50 },
          {label: "Week2", y: 30 },
          {label: "Week3", y: 60 },
          {label: "Week4", y: 35 },
          {label: "Week5", y: 90 },
        ]
      }
    ]
  }

  return (
    <CanvasJSChart options={options} />
  )
}

export default Chart5;