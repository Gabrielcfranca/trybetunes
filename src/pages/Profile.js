import React, { Component } from 'react';
import Header from '../components/Header';
// import propTypes from 'prop-types';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Component Profile</p>
      </div>
    );
  }
}

// Login.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Profile;
