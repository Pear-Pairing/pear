import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import CurrentPairs from './CurrentPairs';
import { apiUrl } from '../config';

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

  const nameInputChangeHandler = ({ target: { value }}) => value.length < 32 ? setNameInput(value) : null;

  const updateDb = () => {
    axios({
      method: "POST",
      body: session,
      url: apiUrl
    })
      .then(() => console.log("Database Updated"))
      .catch((err) => console.log(`Unable to update DB: ${err}`))
  }

  const getNextPairs = () => {
    const index = Math.floor(Math.random() * possiblePairs.length);
    const nextPair = possiblePairs[index];

    possiblePairs.splice(index, 1);
    setSession({ possiblePairs: [...possiblePairs]});

    return nextPair;
  }

  const generatePairsHandler = (event) => {
    event.preventDefault();

    const name = nameInput || `Group ${history.length + 1}`;
    let nextPairs = getNextPairs();

    console.log(`nextPairs: ${JSON.stringify(nextPairs)}`)

    let newRecord = {
      name,
      pairs: nextPairs
    }

    let newHistory = [ newRecord, ...history ]

    console.log(`newHistory: ${JSON.stringify(newHistory)}`)
    setSession({ history: newHistory, currentPairs: nextPairs })
    // update database
  }

  return (
    <Container>
      <SessionId>
        Session ID: {id}
      </SessionId>
      <HistoryContainer>
        <HistoryTitle>History</HistoryTitle>
        <HistoryList>
          {}
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