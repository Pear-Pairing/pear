import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Session from './Session';

const App = (props) => {
  const [session, setSession] = useState(null);

  return (
    <React.Fragment>
      <Wrapper />
      {session
        ? null
        : <Session setSession={setSession}/>
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