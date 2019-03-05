
import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';


export default class App extends React.Component {
  render() {
    const title = this.props.title;
    const players = this.props.players;

    return (
      <div>
        <TitleBar title={title}/>

        <div className='wrapper'>
          <PlayerList players={players}/>

          <AddPlayer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
