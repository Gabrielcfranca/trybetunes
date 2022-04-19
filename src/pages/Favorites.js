import React, { Component } from 'react';
import Header from '../components/Header';
// import propTypes from 'prop-types';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>Component Favorites</p>
      </div>
    );
  }
}

// Login.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Favorites;
