import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchArtist: '',
      loading: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      searchArtist,
      loading,
    } = this.state;

    return (
      <div data-testid="page-search">
        {
          loading && <Loading />
        }
        <Header />
        <div>
          Artista:
          <input
            data-testid="search-artist-input"
            type="text"
            name="searchArtist"
            alt="Nome do artista"
            onChange={ this.onInputChange }
            value={ searchArtist }
          />
          <button
            data-testid="search-artist-button"
            name="login"
            className="form-button"
            type="button"
            disabled={ searchArtist.length < 2 }
            // onClick={ () => this.callAPI() }
          >
            Pesquisar
          </button>
        </div>
        <p>Component Search</p>
      </div>
    );
  }
}

Search.propTypes = {
  // isDisableButton: PropTypes.bool.isRequired,
  // loginNameInput: PropTypes.string.isRequired,
  // onInputChange: PropTypes.string.isRequired,
  // loading: PropTypes.string.isRequired,
  // history: PropTypes.string.isRequired,
  // getAPI: PropTypes.func.isRequired,
};

export default Search;
