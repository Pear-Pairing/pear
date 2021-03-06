import React, { useState } from 'react';
import RosterList from './RosterList.jsx';
import prePear from '../scripts/prePear.js';
import prePear3 from '../scripts/prePear3.js';
import shuffle from '../scripts/shuffle.js';
import styled from 'styled-components';

const RosterAdd = ({setSession}) => {
  const [roster, setRoster] = useState([]);
  const [rosterName, setRosterName] = useState('')
  const [currentName, setCurrentName] = useState('');
// roster should be a list of objects

// roster [{
    // id: roster.length
    // name: Matt
//}]
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentName.trim() !== '') {
      const person = {id: roster.length, name: currentName}
      setRoster(prevRoster => [...prevRoster, person]);
    }
    setCurrentName('');
  }
  const gernerateSprints = () => {
    const finalRoster = [...roster];
    if(finalRoster.length % 2 === 1){
      finalRoster.push({id: finalRoster.length, name: "SOLO"})
    }
    const pairs = shuffle(prePear(finalRoster.map((item)=>item.id)));
    setSession({
      roster: finalRoster,
      possiblePairs: pairs,
      pairsIndex: 0
    });
  }
  const gernerateSprintsFor3 = () => {
    const finalRoster = [...roster];
    if(finalRoster.length % 3 === 1){
      finalRoster.push({id: finalRoster.length, name: "EXTRA1"});
      finalRoster.push({id: finalRoster.length, name: "EXTRA2"});
    } else if(finalRoster.length % 3 === 2){
      finalRoster.push({id: finalRoster.length, name: "EXTRA1"});
    }
    const pairs = shuffle(prePear3(finalRoster.map((item)=>item.id)));
    setSession({
      roster: finalRoster,
      possiblePairs: pairs,
      pairsIndex: 0
    });
  }


  return (
    <Wapper>
      <LogoContainer>
        <PearLogo
          src="https://pear-pairing.s3-us-west-2.amazonaws.com/assets/pear-logo-tn.png"
          alt="Pear Logo"
        />
      </LogoContainer>
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
        <FieldDiv>
          {roster.length === 0
            ? <GenerateButtonDis disabled>Finalize Roster for 2</GenerateButtonDis> : (<GenerateButton onClick={gernerateSprints} >Finalize Roster for 2</GenerateButton>)
          }
          {roster.length === 0
            ? <GenerateButtonDis disabled>Finalize Roster for 3</GenerateButtonDis> : (<GenerateButton onClick={gernerateSprintsFor3} >Finalize Roster for 3</GenerateButton>)
          }
        </FieldDiv>

      </Container>
      <Container>
        <NameDiv2><NameText>Current Roster</NameText></NameDiv2 >
       <RosterDiv><RosterList roster={roster.map((item)=>item.name)} /></RosterDiv>
      </Container>

    </Wapper>
  )
}
export default RosterAdd;
const Wapper = styled.div`
display: flex;
flex-wrap: wrap;
box-shadow: 5px 5px 5px 5px #3333331a;
border-radius: 5px;
background: #fff;
`
const LogoContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  padding: 10px 0 0 20px;
  width: 150px;
`;
const PearLogo = styled.img`
  box-sizing: border-box;
  width: 75px;
  height: 75px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const GenerateButtonDis = styled.button`
  background: linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208));
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  width: 70%;
  margin: 10px;
  opacity: 0.3;
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