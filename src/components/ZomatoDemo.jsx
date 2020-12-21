//global
import React, { useState } from 'react';
import Axios from 'axios';

//files
import { BASE_URL, ZOMATOKEY } from '../helper/constants';
import RestaurantCard from './RestaurantCard'

//styling
import {
  InputGroup, Input, Container, Row, InputGroupAddon,
  Button, Col
} from 'reactstrap';
import { Search } from '@material-ui/icons'


const createHeaders = () => ({
  'Content-Type': 'application/json',
  'user-key': ZOMATOKEY,
});

const App = () => {
  const [data, setData] = useState([]);
  const [cityname, setCityName] = useState('');

  const getRestaurants = (id) => {
    Axios.get(`${BASE_URL}collections?city_id=${id}&count=${20}`, { headers: createHeaders() })
      .then((res) => {
        setDataDynimacally(res.data.collections)
      }).catch((e) => {
        console.log(e);
      })
  }

  const setDataDynimacally = (data) => {
    let Restaurants = []

    data.forEach((item, index) => {
      if (index % 2) {
        Restaurants.push([data[index - 1], data[index]]);
      }
    });

    setData(Restaurants)
  }

  const getId = () => {
    if (cityname) {
      Axios.get(`${BASE_URL}cities?q=${cityname}`, { headers: createHeaders() })
        .then((res) => {
          const { location_suggestions } = res.data

          if (location_suggestions && location_suggestions.length > 0) {
            getRestaurants(location_suggestions[0].id)
          } else {
            alert('Sorry, There are no restaurant found for your city')
          }
        }).catch((e) => {
          console.log(e);
        })
    } else {
      alert('You must have to enter your city name to get the best restaurant in your city')
    }
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <span className="zomato-title">Search for your city And find out the best Restaurants in your city</span>
        </Row>
        <Row>
          <InputGroup>
            <Input className="searchBar" onChange={e => setCityName(e.target.value)} placeholder="Enter your City name here" />
            <InputGroupAddon addonType="append">
              <Button onClick={getId}>
                <Search />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Row>
        <Row style={{marginTop: 30}}>
          {renderRestaurant(data)}
        </Row>
      </Container>
    </div>
  );
}

const renderRestaurant = (data) => {
  if (data && data.length > 0) {
    return data.map((ele, index) => {
      return (
        <Row>
          <Col lg={6} md={6} sm={12}>
            <RestaurantCard data={ele[0].collection} />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <RestaurantCard data={ele[1].collection} />
          </Col>
        </Row>
      )
    })
  }
}

export default App;
