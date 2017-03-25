import React from 'react'

const styleVites = {
  background: 'black',
  color: 'white',
}

const styleLogo = {
  margin: 0,
  padding: '16px',
  fontSize: '14px',
  textTransform: 'uppercase'
}

const Vites = props => (
  <div style={styleVites}>
    <h1 style={styleLogo}>
      Vites
    </h1>
  </div>
)

export default Vites