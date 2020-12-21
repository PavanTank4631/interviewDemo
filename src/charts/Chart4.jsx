import CanvasJSReact from './canvasCharts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart4 = ({ name, xAxis, chartData }) => {
  const options = {
    height: 120,
    width: 230,
    animationEnabled: true,
    axisY: {
      title: "Body Temprature"
    },
    data: [
      {
        type: "splineArea",
        xValueFormatString: "YYYY",
        yValueFormatString: "#,##0.##",
        dataPoints: [
          {label: "Mon", y: 35 },
          {label: "Tue", y: 40 },
          {label: "Wed", y: 30 },
          {label: "Thu", y: 32 },
          {label: "Fri", y: 38 },
          {label: "Sat", y: 31 },
          {label: "Sun", y: 39 }
        ]
      }
    ]
  }

  return (
    <CanvasJSChart options={options} />
  )
}

export default Chart4;