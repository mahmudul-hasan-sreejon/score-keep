
import React from 'react';

import {Players} from './../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
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
  }

	render() {
		return (
      <div className='item'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' name='playerName' placeholder='Player Name' />
          <button>Add Player</button>
        </form>
      </div>
		);
	}
}
