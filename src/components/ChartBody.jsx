//global
import React from 'react'

//files
import Chart1 from '../charts/Chart1'
import Chart2 from '../charts/Chart2'
import Chart3 from '../charts/Chart3'
import Chart4 from '../charts/Chart4'
import Chart5 from '../charts/Chart5'
import Chart6 from '../charts/Chart6'
import Chart7 from '../charts/Chart7'
import ZomatoDemo from '../components/ZomatoDemo'

//styling
import { Row, Col } from 'reactstrap'

const ChartBody = ({tab, setTab}) => {

  return (
    <div className="main-body">
      <Row>
        <div className="btn-body" style={{ backgroundColor: tab == 'analytics' ? '#4375eb' : 'lightgray' }} onClick={() => setTab('analytics')}>
          <p className="btn-text" style={{ color: tab == 'analytics' && 'white' }}>Analytics</p>
        </div>
        <div className="btn-body" style={{ backgroundColor: tab == 'zomatoApi' ? '#4375eb' : 'lightgray' }} onClick={() => setTab('zomatoApi')}>
          <p className="btn-text" style={{ color: tab == 'zomatoApi' && 'white' }}>Zomato Api Demo</p>
        </div>
      </Row>
      <div className="body-content">
        {tab == 'analytics' && renderBodyContent()}
        {tab == 'zomatoApi' && renderZomatoDemo()}
      </div>
    </div>
  )
}

const renderBodyContent = () => {
  return (
    <div>
      <Row className="chart-section-1">
        <Col id="md-col" lg={2} md={4} sm={12}>
          <p id="label">Activity</p>
          <div className="chart-container-md">
            <Chart1 />
          </div>
        </Col>
        <Col id="md-col" lg={2} md={4} sm={12}>
          <p id="label">Heart Rate</p>
          <div className="chart-container-md">
            <Chart2 />
          </div>
        </Col>
        <Col id="md-col" lg={2} md={4} sm={12}>
          <p id="label">Blood Pressure</p>
          <div className="chart-container-md">
            <Chart3 />
          </div>
        </Col>
        <Col id="md-col" lg={2} md={4} sm={12}>
          <p id="label">Body Temprature</p>
          <div className="chart-container-md">
            <Chart4 
            name='Body Temprature' 
            xAxis={['Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun']} 
            chartData={[35, 32, 31, 40, 38, 31, 39]} />
          </div>
        </Col>
        <Col id="md-col" lg={2} md={4} sm={12}>
          <p id="label">Past Appointment</p>
          <div className="card">
            <a href="#">10AM - 11AM</a>
            <a href="#">Rakesh Chavan</a>
            <p href="#">2 Septempber</p>
          </div>
        </Col>
      </Row>
      <Row className="chart-section-2">
        <Col lg={8}>
          <p id="label">Health Conditions</p>
          <div className="chart-container-lg">
            <Chart5 />
          </div>
        </Col>
        <Col lg={4}>
          <p id="label">Lab Results</p>
          {renderlabResults()}
          <Row>
            <Col id="result-col" sm={4} md={4} lg={4}>
              <p id="label">Calories Burned</p>
              <div className="chart-container-md">
                <Chart6 />
              </div>
            </Col>
            <Col id="result-col" sm={8} md={8} lg={8}>
              <p id="label">Sleep Pattern</p>
              <div className="chart-container-md">
                <Chart7 
                name='Sleep Pattern' 
                xAxis={[1, 2, 3, 4, 5, 6, 7, 8, 9]} 
                chartData={[4, 1, 3, 9, 5, 2]} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

const renderlabResults = () => {
  return (
    <div className="result-container">
      <div>
        <Row>
          <Col>{renderDetails({ date: '5 August', label: 'Sugar', count: '140 mg/dL' })}</Col>
          <Col>{renderDetails({ date: '5 August', label: 'Haemoglobin', count: '140 mg/dL' })}</Col>
          <Col>{renderDetails({ date: '5 August', label: 'White Blood Cell', count: '4.9 million mcL' })}</Col>
        </Row>
        <Row>
          <Col>{renderDetails({ date: '5 August', label: 'Lymohocyte', count: '3800' })}</Col>
          <Col>{renderDetails({ date: '5 August', label: 'Red Blood Cell', count: '4.9 million mcL' })}</Col>
          <Col />
        </Row>
      </div>
    </div>
  )
}

const renderDetails = (data) => (
  <div>
    <p className="date-text">{data.date}</p>
    <p className="label-text">{data.label}</p>
    <p className="count-text">{data.count}</p>
  </div>
)

const renderZomatoDemo = () => {
  return (
    <div>
      <ZomatoDemo />
    </div>
  )
}

export default ChartBody;