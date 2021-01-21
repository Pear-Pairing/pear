import React, { useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';
import Session from './Session';
import Main from './Main';
import PairsView from './PairsView';
import sampleData from '../../lib/sampleData/sampleData';

const reducer = (state, changes) => ({...state, ...changes});

const App = (props) => {
  const [session, setSession] = useReducer(reducer, sampleData.PairsView);

  /***** USE THIS INSTEAD OF setSession *****/
  // It behaves the same way as useState's "setSesssion" would.
  const updateSession = (changes) => setSession(session, changes); 

  let currentView = <div>View Error, check conditional on App.jsx</div>

  if (!session.id) {
    currentView = <Session setSession={updateSession} />;
  } else if (session.id && !session.possiblePairs) {
    currentView = (<div>Placeholder Roster View</div>);
  } else {
    currentView = <PairsView session={session} setSession={updateSession} />;
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