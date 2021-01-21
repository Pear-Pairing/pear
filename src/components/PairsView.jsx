import React from 'react';
import styled from 'styled-components';

const PairsView = (props) => {
  const { 
    session,
    session: {
      id,
      roster,
      possiblePairs
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

const PairsSet = styled.div`
  ${defaultStyles}
  padding: 4px;
`

export default PairsView;