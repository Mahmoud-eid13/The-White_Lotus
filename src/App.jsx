// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'

const H1 = styled.h1`
font-size: 30px;
font-weight: 600;
`


const StyledApp = styled.div`
  background-color: darkgray;
  padding: 20px;
`

function App() {
  return (
    <>
    <GlobalStyles/>
    <StyledApp>
     <H1>The White Lotus</H1>
     <Button>Check in</Button>
     <Button>Check out</Button>
     <Input type='number' placeholder='Number of guests'></Input>
    </StyledApp>
    </>
  )
}

export default App

