import React, { useState } from 'react';
import styled from 'styled-components';

const HistoryListItem = (props) => {
  const { setSession, record } = props;

  const onClickHandler = () => setSession({ currentPairs: record.pairs });

  return (
    <Container onClick={onClickHandler}>
      {record.name}
    </Container>
  )
}

const defaultStyles = `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
`

const Container = styled.div`
  ${defaultStyles};
`;

export default HistoryListItem;