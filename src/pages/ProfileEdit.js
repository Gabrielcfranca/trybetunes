import React, { Component } from 'react';
import Header from '../components/Header';
// import propTypes from 'prop-types';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Component ProfileEdit</p>
      </div>
    );
  }
}

// Login.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default ProfileEdit;
