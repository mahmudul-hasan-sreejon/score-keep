
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
          <div className='player'>
            <div>
              <h3 className='player__name'>{playerName}</h3>
              <p className='player__stats'>{playerScore} point(s)</p>
            </div>
            
            <div className='player__actions'>
              <button className='button button--round' onClick={() => Players.update({_id: playerId}, {$inc: {score: 1}})}>+1</button>

              <button className='button button--round' onClick={() => Players.update({_id: playerId}, {$inc: {score: -1}})}>-1</button>

              <button className='button button--round' onClick={() => Players.remove({_id: playerId})}>X</button>
            </div>
          </div>
        </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
