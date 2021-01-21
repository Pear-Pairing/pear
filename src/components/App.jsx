import React from 'react';
import styled from 'styled-components';

const App = (props) => {
  return (
    <Container>
      <div className="main">
            Hello World.
      </div>
    </Container>
  )
}

const Container = styled.div`
  color: red;
`
export default App;