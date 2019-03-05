
import React from 'react';
import PropTypes from 'prop-types';


export default class TitleBar extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <div className='title-bar'>
        <div className='wrapper'>
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  // title: 'Default Prop'
}
