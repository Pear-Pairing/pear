import React from 'react';
import styled from 'styled-components';
import Pair from './Pair';
import exportToTable from '../scripts/ExportTable.js'

const CurrentPairs = (props) => {
  const { roster, currentPairs } = props;

  return (
    <PairsContainer>
      { !currentPairs
        ? null
        : currentPairs.pairs.map((pairArr, index) => (
          <Pair
            key={`pair-${index}`}
            roster={roster}
            pairArr={pairArr}
          />)
        )}
      <ButtonContainer>
        {!currentPairs
          ? <ExportButtonDis disabled>Export</ExportButtonDis>
          : <ExportButton onClick={() => exportToTable(currentPairs, roster, false)}>Export</ExportButton>}
        {!currentPairs
          ? <ExportButtonDis disabled>Download CSV</ExportButtonDis>
          : <ExportButton onClick={() => exportToTable(currentPairs, roster, true)}>Download CSV</ExportButton>}
      </ButtonContainer>
      <TextArea id="csvExport" name="w3review" rows="4" cols="50" readOnly  />

    </PairsContainer>
  )
};

const defaultStyles = `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextArea = styled.textarea`
resize: none;
`
const PairsContainer = styled.div`
  ${defaultStyles}
  flex-direction: column;
  width: 75%;
  height: 70%;
`
const ButtonContainer = styled.div`
  ${defaultStyles}
`
const ExportButton = styled.button`
  background: linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208));
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  margin: 10px;
`
const ExportButtonDis = styled.button`
  background: linear-gradient(to bottom right, rgb(60, 122, 255), rgb(28, 85, 208));
  border: 1px solid rgb(55, 66, 92);
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgb(120, 128, 146);
  margin: 10px;
  opacity: 0.3;
`

export default CurrentPairs;