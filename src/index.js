//global
import React from 'react';
import ReactDOM from 'react-dom';

//files
import Container from './container';
import './styles/styles.scss';

//styling
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
      <Container />
    </React.StrictMode>,
  document.getElementById('root')
);

