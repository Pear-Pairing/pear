import React, { useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';
import Session from './Session';
import PairsView from './PairsView';
import sampleData from '../../lib/sampleData/sampleData';

const reducer = (state, changes) => ({...state, ...changes});

const App = (props) => {
  const [session, setSession] = useReducer(reducer, sampleData.PairsView);

  let currentView = <div>View Error, check conditional on App.jsx</div>

  if (!session.id) {
    currentView = <Session setSession={setSession} />;
  } else if (session.id && !session.possiblePairs) {
    currentView = (<div>Placeholder Roster View</div>);
  } else {
    currentView = <PairsView session={session} setSession={setSession} />;
  }

  return (
    <React.Fragment>
      <Wrapper />
      {currentView}
    </React.Fragment>
  )
}
const Wrapper = createGlobalStyle`
  body {
    background: #ece9e6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    min-height: 100vh;
  }
`
export default App;