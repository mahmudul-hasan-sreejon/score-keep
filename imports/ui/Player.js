
import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';


export default class Player extends React.Component {
  render() {
    const playerId = this.props.player._id;
    const playerName = this.props.player.name;
    const playerScore = this.props.player.score;

    return (
        <div key={playerId} className='item'>
          <p>{playerName} has {playerScore} point(s).</p>

          <button onClick={() => Players.update({_id: playerId}, {$inc: {score: 1}})}>+1</button>
          <button onClick={() => Players.update({_id: playerId}, {$inc: {score: -1}})}>-1</button>
          <button onClick={() => Players.remove({_id: playerId})}>X</button>
        </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
