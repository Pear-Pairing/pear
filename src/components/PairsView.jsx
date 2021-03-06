import React, { useState, useEffect } from 'react';
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
    history = [],
    pairsIndex
  } = props.session;
  const { session, setSession } = props;
  const [ nameInput, setNameInput ] = useState('');
  const [ sendUpdate, setSendUpdate ] = useState(true);

  const nameInputChangeHandler = ({ target: { value }}) => value.length < 32 ? setNameInput(value) : null;

  const resetPossiblePairs = () => {
    setSession({ possiblePairs: shuffle(possiblePairs), pairsIndex: 0 });
  }

  const getNextPairs = () => {
    const nextPair = possiblePairs[pairsIndex];

    if (pairsIndex + 1 >= possiblePairs.length) {
      resetPossiblePairs();
    } else {
      setSession({ pairsIndex: pairsIndex + 1 });
    }

    return nextPair;
  }

  const generatePairsHandler = (event) => {
    event.preventDefault();

    const name = nameInput || `Pair Set ${history.length + 1}`;
    const nextPairs = getNextPairs();
    const newRecord = {
      name,
      pairs: nextPairs
    }

    const newHistory = [ newRecord, ...history ]
    setSession({ history: newHistory, currentPairs: newRecord })
    setSendUpdate(true);
  }

  useEffect(() => {
    if (sendUpdate) {
      updateDb(session);
      setSendUpdate(false);
    }
  });

  return (
    <Container>
      <SessionId>
        Session ID: {id}
      </SessionId>
      <LeftCol>
        <PearLogo
          src="https://pear-pairing.s3-us-west-2.amazonaws.com/assets/pear-logo-tn.png"
          alt="Pear Logo"
        />
        <HistoryContainer>
          <HistoryList>
            <HistoryTitle>History</HistoryTitle>
            {history.map((record, index) => (
              <HistoryListItem
                key={`record-${index}`}
                setSession={setSession}
                record={record}
              />))}
          </HistoryList>
        </HistoryContainer>
      </LeftCol>
      <PairsAndButton>
        <CurrentPairs roster={roster} currentPairs={currentPairs}/>
        <NameInput
          placeholder="Name these pairs"
          value={nameInput}
          onChange={nameInputChangeHandler}
        ></NameInput>
        <GeneratePairsBtn
          onClick={generatePairsHandler}
        >Pair them up!</GeneratePairsBtn>
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

const PearLogo = styled.img`
  width: 75px;
  height: 75px;
  margin: 10px 0 10px 0;
`;

const SessionId = styled.div`
  ${defaultStyles}
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 20px;
  height: 20px;
`;

const LeftCol = styled.div`
  ${defaultStyles}
  border: none;
  flex-direction: column;
  padding: 0 0 20px 20px;
  height: 100vh;
  width: 150px;
`;

const HistoryContainer = styled.div`
  ${defaultStyles}
  flex-direction: column;
  justify-content: flex-start;
  width: 130px;
  height: 100%;
  border: none;
  background: #fff;
  box-shadow: 5px 5px 5px 5px #3333331a;
  border-radius: 5px;
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
  border: none;
`;

const PairsAndButton = styled.div`
  ${defaultStyles}
  flex-direction: column;
  border: none;
  width: 100%;
  height: 100%;
`

const GeneratePairsBtn = styled.button`
  background: linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208));
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  margin: 10px;
`;

const NameInput = styled.input`
  ${defaultStyles}
  padding: 2px;
`;

export default PairsView;