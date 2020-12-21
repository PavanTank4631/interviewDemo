import CanvasJSReact from './canvasCharts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart7 = ({ name, xAxis, chartData }) => {
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
          {label: "Mon", y: 0.1 },
          {label: "Tue", y: 0.2 },
          {label: "Wed", y: 0.5 },
          {label: "Thu", y: 0.1 },
          {label: "Fri", y: 0.2 },
          {label: "Sat", y: 0.5 },
          {label: "Sun", y: 0.1 }
        ]
      }
    ]
  }

  return (
    <CanvasJSChart options={options} />
  )
}

export default Chart7;