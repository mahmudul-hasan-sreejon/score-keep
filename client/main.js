
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';


// Render players in the client
const renderPlayers = playersList => {
  return playersList.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).

        <button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>

        <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>

        <button onClick={() => Players.remove({_id: player._id})}>X</button>
      </p>
    );
  });
};


// Start App
Meteor.startup(() => {
  // Autorun data update
  Tracker.autorun(() => {
    // Fetch all player data
    const players = Players.find().fetch();

    // Render player data
    const jsx = (
      <div>
        <TitleBar/>

        {renderPlayers(players)}

        <AddPlayer/>
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
