import React, { Component } from 'react';
import Header from '../components/Header';
// import propTypes from 'prop-types';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <p>Component Album</p>
      </div>
    );
  }
}

// Login.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Album;
