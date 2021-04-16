import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import getExpires from '../scripts/getExpires';

const Session = ({ setSession }) => {
  const [sessionExist, setSessionExist] = useState(false);
  const [newSession, setNewSession] = useState(false);
  const [sessionID, setSessionID] = useState('');
  const [validInput, setValidInput] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const createNewSession = (id) => {
    if (id.length >= 3 && id.length <= 8 && (/[a-zA-Z0-9]/).test(id)) {
      setSubmitted(true);
      id = id.toString().toUpperCase();
      axios.post('https://z3oa41ri13.execute-api.us-west-2.amazonaws.com/dev/api/session/', {
        id: id,
        expires: getExpires()
      })
      .then(() => getID(id))
      .catch(err => console.log(err));
    } else {
      setValidInput(false);
      setSessionID('');
    }
  }

  const getID = (id) => {
    if (id.length >= 3 && id.length <= 8 && (/[a-zA-Z0-9]/).test(id)) {
      setSubmitted(true);
      id = id.toString().toUpperCase();
      axios.get(`https://z3oa41ri13.execute-api.us-west-2.amazonaws.com/dev/api/session/${id}`)
      .then(({data}) => {
        if (data) {
          setSession(data);
        } else {
          setValidInput(false);
          setSessionID('');
        }
      })
      .catch(err => console.log(err));
    } else {
      setValidInput(false);
      setSessionID('');
    }
  }
  if (submitted) {
    return (
      <Container>
        <WelcomeImage
          src="https://pear-pairing.s3-us-west-2.amazonaws.com/assets/pear-logo-full-sm.png"
          alt="Pear"
        />
        <ImageContainer>
          <Image src="https://pear-pairing.s3-us-west-2.amazonaws.com/assets/loading.gif" alt="loading..."></Image>
        </ImageContainer>
      </Container>
    )
  } else {
    return (
      <Container>
        <WelcomeImage
          src="https://pear-pairing.s3-us-west-2.amazonaws.com/assets/pear-logo-full-sm.png"
          alt="Pear"
        />
          {submitted &&
            <Image src="https://pear-pairing.s3-us-west-2.amazonaws.com/assets/loading.gif" alt="loading..."></Image>
          }
          {!sessionExist && !newSession &&
            <AskSession>
              <CreateNewSessionButton onClick={() => setNewSession(true)}>New Session</CreateNewSessionButton>
              <UseExistingSessionButton onClick={() => setSessionExist(true)}>Existing Session</UseExistingSessionButton>
            </AskSession>}

          {sessionExist && !newSession &&
          <AskSession>
            {!validInput && <InvalidID>ID could not be found</InvalidID>}
            <Input placeholder="Enter a existing ID" value={sessionID} onChange={e => setSessionID(e.target.value)}></Input>
            <SubmitSessionButton onClick={() => getID(sessionID)}>Submit</SubmitSessionButton>

          </AskSession>}

          {newSession &&
          <AskSession>
            {validInput
            ? '* A session ID must be 3-8 characters'
            : <InvalidID>Invalid ID format</InvalidID>}
            <Input placeholder="Create a session ID" value={sessionID} onChange={e => setSessionID(e.target.value)}></Input>
            <SubmitSessionButton onClick={() => createNewSession(sessionID)}>Submit</SubmitSessionButton>
          </AskSession>}

      </Container>)
    }
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
  padding-top: 15px;
`
const Welcome = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const WelcomeImage = styled.img`
  width: 70%;
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
const Image = styled.img`
  width: 190px;
  height: 150px;
`
const ImageContainer = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export default Session;