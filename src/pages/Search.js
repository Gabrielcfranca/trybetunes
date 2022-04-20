import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
// import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchArtist: '',
      // loading: false,
      searched: '',
      albuns: [],
    };
  }

  onInputChange = ({ target }) => {
    this.setState({
      searchArtist: target.value,
    });
  };

  async callAPI() {
    const { searchArtist } = this.state;
    this.setState({
      // loading: true,
    }, async () => {
      const data = await searchAlbumsAPI(searchArtist);
      this.setState((prevState) => ({
        searchArtist: '',
        searched: prevState.searchArtist,
        albuns: data,
      }));
    });
  }

  render() {
    const {
      searchArtist,
      // loading,
      searched,
      albuns,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <main>
          <form>
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
              onClick={ () => this.callAPI() }
            >
              Pesquisar
            </button>
          </form>
        </main>
        <div>
          {/* { loading && <Loading /> } */}
          <h2>{ `Resultado de álbuns de: ${searched}` }</h2>
          <section>
            {albuns.length < 1 ? 'Nenhum álbum foi encontrado'
              : albuns.map((item, index) => (
                <div key={ index }>
                  <Link
                    data-testid={ `link-to-album-${item.collectionId}` }
                    to={ `/album/${item.collectionId}` }
                  >
                    <img src={ item.artworkUrl100 } alt={ item.artistName } />
                    <p>{ item.collectionName }</p>
                    <p>{ item.artistName }</p>
                  </Link>
                </div>
              ))}
          </section>
        </div>
      </div>);
  }
}

export default Search;
