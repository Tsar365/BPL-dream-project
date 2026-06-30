// import React from 'react';
import {use} from 'react';

const AvailablePlayers = ({playerPromise}) => {
  const playerData=use(playerPromise) //take time for load
  console.log(playerData)
  return (
    <div>
      <p>available</p>
    </div>
  );
};

export default AvailablePlayers;