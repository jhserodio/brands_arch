import React from 'react';

const styleHeader = {
  background: 'black',
  color: 'white',
}

const styleLogo = {
  margin: 0,
  padding: '16px',
  fontSize: '14px',
  textTransform: 'uppercase'
}

const Domus = props => (
  <div style={styleDomus}>
    <h1 style={styleLogo}>
      Domus
    </h1>
  </div>
);

export default Domus;