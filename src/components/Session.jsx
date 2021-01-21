import React, { useState } from 'react';
import styled from 'styled-components';

const Session = ({ setSession }) => {
  const [sessionExist, setSessionExist] = useState(false);
  const [sessionID, setSessionID] = useState("");

  const handleNewSessionButton = () => {

  }

  return (
    <Container>
      <Welcome>
        <WelcomeText>pear</WelcomeText>
      </Welcome>
        {sessionExist
        ?
        <AskSession>
          <Input placeholder="Enter a existing ID" value={sessionID} onChange={e => setSessionID(e.target.value)}></Input>
          <SubmitSessionButton onClick={() => setSession(sessionID)}>Submit</SubmitSessionButton>
        </AskSession>
        :
        <AskSession>
          <CreateNewSessionButton onClick={() => handleNewSessionButton()}>New Session</CreateNewSessionButton>
          <UseExistingSessionButton onClick={() => setSessionExist(true)}>Existing Session</UseExistingSessionButton>
        </AskSession>
        }
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
export default Session;