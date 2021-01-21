import React, { useState } from 'react';
import styled from 'styled-components';

const Session = ({ setSession }) => {
  const [sessionExist, setSessionExist] = useState(false);
  const [newSession, setNewSession] = useState(false);
  const [sessionID, setSessionID] = useState('');
  const [validInput, setValidInput] = useState(true);

  const createNewSession = (id) => {
    if (id.length >= 3 && id.length <= 8 && (/[a-zA-Z0-9]/).test(id)) {
      setValidInput(true);
      setSession({id: sessionID});
    } else {
      setValidInput(false);
      setSessionID('')
    }
  }

  return (
    <Container>
      <Welcome>
        <WelcomeText>pear</WelcomeText>
      </Welcome>
        {!sessionExist && !newSession &&
          <AskSession>
            <CreateNewSessionButton onClick={() => setNewSession(true)}>New Session</CreateNewSessionButton>
            <UseExistingSessionButton onClick={() => setSessionExist(true)}>Existing Session</UseExistingSessionButton>
          </AskSession>}

        {sessionExist && !newSession &&
        <AskSession>
          <Input placeholder="Enter a existing ID" value={sessionID} onChange={e => setSessionID(e.target.value)}></Input>
          <SubmitSessionButton onClick={() => setSession({id: sessionID})}>Submit</SubmitSessionButton>
        </AskSession>}

        {newSession &&
        <AskSession>
          {validInput
          ? '* A session ID must be 3-8 characters'
          : <InvalidID>Invalid ID format</InvalidID>}
          <Input placeholder="Create a session ID" value={sessionID} onChange={e => setSessionID(e.target.value)}></Input>
          <SubmitSessionButton onClick={() => createNewSession(sessionID)}>Submit</SubmitSessionButton>
        </AskSession>}

    </Container>
  )
}

const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px #3333331a;
  border-radius: 5px;
  height: 400px;
  width: 300px;
`
const Welcome = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const WelcomeText = styled.h1`
  font-size: 3em;
  text-align: center;
`
const AskSession = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const CreateNewSessionButton = styled.button`
  background: linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208));
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  width: 70%;
  margin: 10px;
`
const UseExistingSessionButton = styled.button`
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: black;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  width: 70%;
`
const Input = styled.input`
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  width: 61%;
  margin: 10px;
`
const SubmitSessionButton = styled.button`
  background: linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208));
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  width: 70%;
`
const InvalidID = styled.p`
  margin-bottom: -5px;
  color: red;
  animation: shake 0.82s
`
export default Session;