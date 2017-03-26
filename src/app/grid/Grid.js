import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 20px auto;

  div {
    margin: 10px;
    width: 300px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`


const Grid = props => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default Grid