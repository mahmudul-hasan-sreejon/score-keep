
import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';


export default class PlayerList extends React.Component {
  // Render players in the client
  renderPlayers() {
    const players = this.props.players;

    if(players.length === 0) {
      return (
        <div className='item'>
          <p className='item__message'>Add your first player to get started.</p>
        </div>
      );
    }
    else {
      return players.map(player => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
