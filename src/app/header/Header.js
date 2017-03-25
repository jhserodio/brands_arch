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

const Header = props => (
  <header style={styleHeader}>
    <h1 style={styleLogo}>
      brands
    </h1>
  </header>
);

export default Header;