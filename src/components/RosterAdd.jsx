import React, { useState } from 'react';
import RosterList from './RosterList.jsx';
import prePear from '../scripts/prePear.js';
import shuffle from '../scripts/shuffle.js';
import styled from 'styled-components';

const RosterAdd = (props) => {
  const [roster, setRoster] = useState([]);
  const [rosterName, setRosterName] = useState('')
  const [currentName, setCurrentName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentName.trim() !== '') {
      setRoster(prevRoster => [...prevRoster, currentName]);
    }
    setCurrentName('');
  }
  const gernerateSprints = () => {
    console.log(shuffle(prePear(roster)));
    //TODO
    // once state is managed and passed down, the reult of shuffle(prePear(roster)) will
    // be saverd in the master roster, and the title of the roster will be saved as well
  }


  return (
    <Wapper>
      <Container>
      <NameDiv><NameText>Please input names for the Roster</NameText></NameDiv>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <label> <NameDiv><h3>Roster Name</h3></NameDiv>
            <FieldDiv>
              <Input
                name="rosterName"
                value={rosterName}
                onChange={(e) => setRosterName(e.target.value)}
              />
            </FieldDiv>
          </label>
          <label> <NameDiv><h3>Student Name</h3></NameDiv>
            <FieldDiv>
              <Input
                name="name"
                value={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
              />
            </FieldDiv>
          </label>

          <FieldDiv><AddRosterButton>Add Name to Roster</AddRosterButton></FieldDiv>
        </form>
        <FieldDiv>{roster.length === 0 ? <GenerateButton disabled>Generate Sprints</GenerateButton> : <GenerateButton onClick={gernerateSprints} >Generate Sprints</GenerateButton>}</FieldDiv>

      </Container>
      <Container>
        <NameDiv2><NameText>Current Roster</NameText></NameDiv2 >
       <RosterDiv><RosterList roster={roster} index={roster.length} /></RosterDiv>
      </Container>

    </Wapper>
  )
}
export default RosterAdd;
const Wapper = styled.div`
display: flex;
flex-wrap: wrap;
`
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
  padding: 20px;
`
const NameDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const NameDiv2 = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`
const NameText = styled.h2`
  text-align: center;
  margin-top: 0%;
`
const RosterDiv = styled.div`
  height: 90%;
`
const FieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const GenerateButton = styled.button`
  background: linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208));
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  width: 70%;
  margin: 10px;
`
const AddRosterButton = styled.button`
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
  margin-top:-5px;
`