import CanvasJSReact from './canvasCharts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart1 = () => {
  const options = {
    height: 120,
    width: 230,
    animationEnabled: true,
    data: [{
      type: "column",
      dataPoints: [
        { label: "Mon", y: 10 },
        { label: "Tue", y: 15 },
        { label: "Wed", y: 25 },
        { label: "Thu", y: 30 },
        { label: "Fri", y: 28 },
        { label: "Sat", y: 21 },
        { label: "Sun", y: 12 }
      ]
    }]
  }

  return (
    <CanvasJSChart options={options}/>
  )
}

export default Chart1;