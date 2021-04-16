import React from 'react';
import styled from 'styled-components';

const Pair = (props) => {
  const { roster, pairArr } = props;
  const firstPerson = roster[pairArr[0]];
  const secondPerson = roster[pairArr[1]];
  const thirdPerson = roster[pairArr[2]];

  return (
    <Container>
      {thirdPerson
        ? (
          <>
            <LeftPerson>{firstPerson.name}</LeftPerson>
            <RightPerson>{secondPerson.name}</RightPerson>
            <LeftPerson>{thirdPerson.name}</LeftPerson>
          </>
        )
        : (
          <>
            <LeftPerson>{firstPerson.name}</LeftPerson>
            <RightPerson>{secondPerson.name}</RightPerson>
          </>
        )
      }
    </Container>
  )
}

const defaultStyles = `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  ${defaultStyles}
  border: 1px solid black;
  border-radius: 3px;
  margin: 3px;
  overflow: hide;
  min-width: 300px;
`;

const LeftPerson = styled.div`
  ${defaultStyles}
  background: rgba(163, 230, 156, 1);
  width: 50%;
  padding: 3px;
`;

const RightPerson = styled.div`
  ${defaultStyles}
  background: rgba(198, 155, 224, 1);
  width: 50%;
  padding: 3px;
`;

export default Pair;