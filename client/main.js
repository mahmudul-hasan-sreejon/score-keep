
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';


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

const handleSubmit = e => {
  // Stop page refresh
  e.preventDefault();

  const playerName = e.target.playerName.value;
  if(playerName) {
    // Clear input field
    e.target.playerName.value = '';

    // Insert new players data
    Players.insert(
      {
        name: playerName,
        score: 0
      }
    );
  }
};

// Start App
Meteor.startup(() => {
  // Autorun data update
  Tracker.autorun(() => {
    // Fetch all player data
    const players = Players.find().fetch();

    // Render player data
    const title = 'Score Keep';
    const jsx = (
      <div>
        <h1>{title}</h1>

        {renderPlayers(players)}

        <form onSubmit={handleSubmit}>
          <input type='text' name='playerName' placeholder='Player Name' />
          <button>Add Player</button>
        </form>
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
