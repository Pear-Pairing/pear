import React from 'react';
import styled from 'styled-components';

const CurrentPairs = (props) => {
  const { roster, currentPairs } = props;

  return (
    <PairsContainer>
      Pairs Container
    </PairsContainer>
  )
};

const defaultStyles = `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  width: 75%;
  height: 70%;
`

const PairsContainer = styled.div`
  ${defaultStyles}
`

export default CurrentPairs;