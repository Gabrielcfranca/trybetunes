import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      checkedstate: false,
    };
  }

  componentDidMount = () => {
    const { checked } = this.props;
    this.setState({
      checkedstate: checked,
    });
  }

  // isChecked = async (trackId) => {
  //   const { music, savemusics } = this.props;
  //   savemusics(trackId);
  //   this.setState({
  //     checkedstate: true,
  //     loading: true,
  //   });
  //   await addSong(music);
  //   // console.log(newsongs);
  //   this.setState({
  //     loading: false,
  //   });
  // }

  isChecked = ({ target }) => {
    const { checkedstate } = this.state;
    this.setState({ checkedstate: !checkedstate });
    this.favoriteMusic(target.id);
    // ^Atualiza os checks das música de props para states e em seguida usa a função abaixo
  }

  favoriteMusic = async (id) => {
    const { checkedstate } = this.state;
    const { savemusics, music } = this.props;

    this.setState({ loading: true });
    if (!checkedstate) {
      await addSong(music);
      this.setState({ loading: false, checkedstate: true });
    } else {
      await removeSong(music);
      this.setState({ loading: false, checkedstate: false });
      if (typeof savemusics !== 'string') savemusics(id);
    }
  }

  render() {
    const { loading, checkedstate } = this.state;
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
            checked={ checkedstate }
            onChange={ this.isChecked }
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
  music: PropTypes.objectOf(PropTypes.shape).isRequired,
  checked: PropTypes.bool.isRequired,
  savemusics: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

MusicCard.defaultProps = {
  savemusics: '',
};

export default MusicCard;
