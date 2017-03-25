import React from 'react';

const styleSantorini = {
  background: 'black',
  color: 'white',
}

const styleLogo = {
  margin: 0,
  padding: '16px',
  fontSize: '14px',
  textTransform: 'uppercase'
}

const Santorini = props => (
  <div style={styleSantorini}>
    <h1 style={styleLogo}>
      Santorini
    </h1>
  </div>
);

export default Santorini;