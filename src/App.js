import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  // searchButtonOn = () => {
  //   const {
  //     searchArtist,
  //   } = this.state;
  //   const valueMinSearch = 2;
  //   if (searchArtist.length >= valueMinSearch) {
  //     this.setState({
  //       isDisableButton: false,
  //     });
  //   } else {
  //     this.setState({
  //       isDisableButton: true,
  //     });
  //   }
  // }

  render() {
    // const { loading } = this.state;
    return (
      <main>
        <div>Trybe Tunes</div>
        <Switch>
          <Route
            path="/"
            exact
            render={ (props) => (<Login
              { ...props }
              { ...this.state }
              // loginButton={ this.loginButton }
              onInputChange={ this.onInputChange }
              // loading={ loading }
              // getAPI={ this.getAPI }
            />) }
          />
          <Route
            path="/search"
            render={ (props) => (<Search
              { ...props }
              { ...this.state }
              // loginButton={ this.loginButton }
              // onInputChange={ this.onInputChange }
              // loading={ loading }
              // getAPI={ this.getAPI }
            />) }
          />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default App;
