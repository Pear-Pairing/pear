import React, { useState } from 'react';
import RosterAdd from './RosterAdd.jsx'

const Main = ({setSession}) => {
  return (
    <RosterAdd setSession={setSession}/>
  )
}
export default Main;