import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
// import propTypes from 'prop-types';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteMusics: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.state = {
      loading: true,
    };
    const favoriteMusicsGet = await getFavoriteSongs();
    this.setState({
      favoriteMusics: favoriteMusicsGet,
      loading: false,
    });
  }

  saveFavorites = async (trackId) => {
    const { favoriteMusics } = this.state;
    const musicsfavorites = favoriteMusics.filter((element) => (
      element.trackId !== Number(trackId)));
    this.setState({
      favoriteMusics: musicsfavorites,
    });
  }

  render() {
    const {
      favoriteMusics,
      loading,
    } = this.state;
    return (
      <div data-testid="page-favorites">
        {
          loading && <Loading />
        }
        <Header />
        {favoriteMusics.slice(1).map((elem) => (
          <MusicCard
            key={ elem.trackId }
            trackId={ elem.trackId }
            trackName={ elem.trackName }
            previewUrl={ elem.previewUrl }
            favorites={ favoriteMusics }
            checked
            music={ elem }
            savemusics={ this.saveFavorites }
          />
        ))}
      </div>
    );
  }
}

// Login.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Favorites;
