import React, { useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';
import Session from './Session';
import Main from './Main';

const reducer = (state, changes) => ({...state, ...changes});

const App = (props) => {
  const [session, setSession] = useReducer(reducer, {id:123});

  /***** USE THIS INSTEAD OF setSession *****/
  // It behaves the same way as useState's "setSesssion" would.
  const updateSession = (changes) => setSession(session, changes);

  return (
    <React.Fragment>
      <Wrapper />
      {session.id
        ? <Main />
        : <Session setSession={updateSession}/>
      }
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