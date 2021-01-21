import React from 'react';
import styled from 'styled-components';
import CurrentPairs from './CurrentPairs';

const PairsView = (props) => {
  const { 
    session,
    session: {
      id,
      roster,
      possiblePairs,
      currentPairs
    }
  } = props;

  return (
    <Container>
      <SessionId>
        Session ID: {id}
      </SessionId>
      <HistoryContainer>
        {}
      </HistoryContainer>
      <PairsAndButton>
        <CurrentPairs roster={roster} currentPairs={currentPairs}/>
        <GeneratePairsBtn>Generate Pairs</GeneratePairsBtn>
      </PairsAndButton>

    </Container>
  )
};

const defaultStyles = `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
`

const Container = styled.div`
  ${defaultStyles}
  position: absolute;
  left: 0;
  top: 0;
  border: none;
  height: 100vh;
  width: 100%;
`;

const SessionId = styled.div`
  ${defaultStyles}
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 4px;
  height: 20px;
`;

const HistoryContainer = styled.div`
  ${defaultStyles}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  padding: 4px;
  width: 100px;
  height: 80%;
  overflow-y: scroll;
`

const PairsAndButton = styled.div`
  ${defaultStyles}
  flex-direction: column;
  border: none;
  width: 100%;
  height: 100%;
`

const GeneratePairsBtn = styled.button`
  ${defaultStyles}
  height: 50px;
  margin-top: 10px;
`;

export default PairsView;