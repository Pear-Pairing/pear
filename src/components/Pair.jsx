import React from 'react';
import styled from 'styled-components';

const Pair = (props) => {
  const { roster, pairArr } = props;
  const firstPerson = roster[pairArr[0]];
  const secondPerson = roster[pairArr[1]];

  return (
    <Container>
      <LeftPerson>{firstPerson.name}</LeftPerson>
      <RightPerson>{secondPerson.name}</RightPerson>
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
  padding: 3px;
  margin: 3px;
`;

const LeftPerson = styled.div`
  ${defaultStyles}
  background-color: rgba(163, 230, 156, 1);
`;

const RightPerson = styled.div`
  ${defaultStyles}
  background-color: rgba(168, 130, 191, 1);
  margin-left: 10px;
`;

export default Pair;