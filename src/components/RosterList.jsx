import React, { useState } from 'react';

const RosterList = ({ roster, index }) => {



  return (
    <ul>
      {roster.map((student) => <li key={index}>{student}</li>)}
    </ul>
  )
}
export default RosterList;