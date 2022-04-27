import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorite: false,
    };
  }

  isChecked = async () => {
    const { music } = this.props;
    console.log(this.props, 'log do music');
    this.setState({
      favorite: true,
      loading: true,
    });
    const newsongs = await addSong(music);
    console.log(newsongs, 'log do musics');
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading, favorite } = this.state;
    const { previewUrl, trackName, trackId } = this.props;
    return (
      <div>
        {
          loading && <Loading />
        }
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            id={ trackId }
            checked={ favorite }
            onClick={ this.isChecked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  music: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MusicCard;
