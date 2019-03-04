
import React from 'react';


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

export default class AddPlayer extends React.Component {
	render() {
		return (
			<form onSubmit={handleSubmit}>
				<input type='text' name='playerName' placeholder='Player Name' />
				<button>Add Player</button>
			</form>
		);
	}
}
