import React, { useState } from 'react';
import styled from 'styled-components';
import CurrentPairs from './CurrentPairs';
import HistoryListItem from './HistoryListItem';
import updateDb from '../scripts/updateDb';
import shuffle from '../scripts/shuffle';

const PairsView = (props) => {
  const { 
    id,
    roster,
    possiblePairs,
    currentPairs,
    history = []
  } = props.session;
  const { session, setSession } = props;

  const [ nameInput, setNameInput ] = useState('');
  const [ pairsIndex, setPairsIndex ] = useState(0);

  const nameInputChangeHandler = ({ target: { value }}) => value.length < 32 ? setNameInput(value) : null;

  const resetPossiblePairs = () => {
    setPairsIndex(0);
    setSession({ possiblePairs: shuffle(possiblePairs) });
    console.log(`Reset Triggered`);
  }

  const getNextPairs = () => {
    const nextPair = possiblePairs[pairsIndex];

    if (pairsIndex + 1 >= possiblePairs.length) {
      resetPossiblePairs();
    } else {
      setPairsIndex(pairsIndex + 1);
    }

    return nextPair;
  }

  const generatePairsHandler = (event) => {
    event.preventDefault();

    const name = nameInput || `Pair Set ${history.length + 1}`;
    let nextPairs = getNextPairs();

    let newRecord = {
      name,
      pairs: nextPairs
    }

    let newHistory = [ newRecord, ...history ]

    setSession({ history: newHistory, currentPairs: nextPairs })
    updateDb(session);
  }

  return (
    <Container>
      <SessionId>
        Session ID: {id}
      </SessionId>
      <HistoryContainer>
        <HistoryTitle>History</HistoryTitle>
        <HistoryList>
          {history.map((record, index) => (
            <HistoryListItem 
              key={`record-${index}`}
              setSession={setSession} 
              record={record} 
            />))}
        </HistoryList>
      </HistoryContainer>
      <PairsAndButton>
        <CurrentPairs roster={roster} currentPairs={currentPairs}/>
        <NameInput 
          placeholder="Name these pairs"
          value={nameInput}
          onChange={nameInputChangeHandler}
        ></NameInput>
        <GeneratePairsBtn
          onClick={generatePairsHandler}
        >Generate Pairs</GeneratePairsBtn>
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
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 100px;
  height: 80%;
  border: none;
`

const HistoryTitle = styled.h3`
  position: relative;
  text-align: center;
  margin: 0;
  margin-bottom: 3px;
  top: 0;
  width: 100%;
`;

const HistoryList =  styled.div`
  ${defaultStyles}
  flex-direction: column;
  justify-content: flex-start;
  padding: 4px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

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

const NameInput = styled.input`
  ${defaultStyles}
  padding: 2px;
`;

export default PairsView;