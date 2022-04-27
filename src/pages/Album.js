import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      album: [],
      artistName: '',
      collectionName: '',
      // favorites: [],
    };
  }

  async componentDidMount() {
    // chama a função callApi assim que abre a página
    await this.callApi2();
  }

  async callApi2() {
    // log da props que chega via route do arquivo app
    // coloque o console.log(this.props) para ver como está chegando o array de objetos da api
    // acessa o parametro e coloca ele como props
    const { match: { params: { id } } } = this.props;
    // console.log(id, 'log do id');
    // cria uma variavel para receber a chamada da funcao da api 'musicsApi'recebendo o id
    const musics = await getMusics(id);
    const { artistName, collectionName } = musics[0];
    // .shift elimina o primeiro elemento do array.
    // musics.shift();
    // console.log(musics, 'log do getMusics');
    // cria o estado para receber a const music
    this.setState({
      album: [...musics],
      artistName,
      collectionName,
    });
  }

  render() {
    // recebe o state criado no setState criado da callAPI, com o album da escolhido
    const {
      album,
      artistName,
      collectionName,
    } = this.state;
    console.log(album, 'log do album no render');

    return (
      <div data-testid="page-album">
        <Header />
        <p>Component Album</p>
        {/* criar um map para renderizar o que foi solicitado no requisito na tela */}
        <p data-testid="artist-name">{`${artistName}`}</p>
        <p data-testid="album-name">{`${collectionName}`}</p>
        {album.slice(1).map((elem, index) => (
          // <div key={ elem.trackId }>
          <MusicCard
            key={ index }
            trackId={ elem.trackId }
            trackName={ elem.trackName }
            previewUrl={ elem.previewUrl }
            // favorites={ favorites }
            music={ elem }
          />
          // </div>
        ))}
      </div>);
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
