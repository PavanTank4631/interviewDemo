import CanvasJSReact from './canvasCharts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart2 = () => {
  const options = {
    height: 120,
    width: 230,
    animationEnabled: true,
    axisX:{
      suffix: ':00'
    },
    axisY: {
      title: "Heart rate(bpm)",
    },
    data: [{
      yValueFormatString: "#bpm",
      type: "spline",
      dataPoints: [
        { x: 9 , y: 100 },
        { x: 10, y: 90 },
        { x: 11, y: 110 },
        { x: 12, y: 120 },
        { x: 13, y: 140 },
        { x: 14, y: 60 },
      ]
    }]
  }


  return (
    <CanvasJSChart options={options}/>
  )
}

export default Chart2;