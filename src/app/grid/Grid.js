import React from 'react'

const styleGrid = {
  display: 'flex'
}

const Grid = props => (
  <div style={styleGrid}>
    {props.children}
  </div>
)

export default Grid