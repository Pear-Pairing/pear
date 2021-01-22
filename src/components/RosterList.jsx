import React, { useState } from 'react';

const RosterList = ({ roster }) => {
  return (
    <ul>
      {roster.map((student) => <li key={`${student}${roster.length}`}>{student}</li>)}
    </ul>
  )
}
export default RosterList;