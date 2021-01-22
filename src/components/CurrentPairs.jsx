import React from 'react';
import styled from 'styled-components';
import Pair from './Pair';

const CurrentPairs = (props) => {
  const { roster, currentPairs } = props;

  return (
    <PairsContainer>
      { !currentPairs
      ? null
      : currentPairs.map((pairArr, index) => (
        <Pair
          key={`pair-${index}`}
          roster={roster} 
          pairArr={pairArr} 
        />)
      )}
    </PairsContainer>
  )
};

const defaultStyles = `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PairsContainer = styled.div`
  ${defaultStyles}
  flex-direction: column;
  width: 75%;
  height: 70%;
`

export default CurrentPairs;