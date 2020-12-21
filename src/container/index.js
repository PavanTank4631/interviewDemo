//global
import React, { useState } from 'react';
import { Container } from 'reactstrap';

//files
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ChartBody from '../components/ChartBody';

const Index = () => {
  const [tab, setTab] = useState('analytics')

  return (
    <Container fluid>
      <Header />
      <SubHeader />
      <ChartBody tab={tab} setTab={(tab) => setTab(tab)}/>
    </Container>
  )
}

export default Index;
