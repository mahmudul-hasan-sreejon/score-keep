
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPosition} from './../imports/api/players';

import App from './../imports/ui/App';


// Start App
Meteor.startup(() => {
  // Auto-run data update
  Tracker.autorun(() => {
    const title = "Score Keep";

    // Fetch all player data by sorting score in descending order
    const players = Players.find({}, {sort: {score: -1}}).fetch();
    const positionedPlayers = calculatePlayerPosition(players);

    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
