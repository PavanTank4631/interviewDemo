import CanvasJSReact from './canvasCharts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart3 = () => {
  const options = {
    height: 120,
    width: 230,
    animationEnabled: true,
    axisY: {
      title: "Blood Pressure(mmHg)",
    },
    data: [{
      type: "rangeColumn",
      toolTipContent: "<strong>{label}</strong></br> Max: {y[1]} mmHg<br/> Min: {y[0]} mmHg",
      dataPoints: [
        { label: "Mon", y: [1, 5] },
        { label: "Tue", y: [3, 15] },
        { label: "Wed", y: [5, 20] },
        { label: "Thu", y: [2, 11] },
        { label: "Fri", y: [3, 9] },
        { label: "Sat", y: [8, 25] },
        { label: "Sun", y: [0, 11] },
      ]
    }]
  }

  return (
    <CanvasJSChart options={options} />
  )
}

export default Chart3;