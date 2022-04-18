import React from 'react';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisableButton: true,
      loginButton: false,
      loginNameInput: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    this.setState({
      [name]: value,
    }, () => { this.loginButtonOn(); });
  };

  loginButtonOn = () => {
    const {
      loginNameInput,
    } = this.state;
    const valueMinInput = 3;
    console.log(loginNameInput);
    if (loginNameInput.length >= valueMinInput) {
      this.setState({
        isDisableButton: false,
      });
    } else {
      this.setState({
        isDisableButton: true,
      });
    }
  }

  render() {
    return (
      <main>
        <Login
          { ...this.state }
          // isDisableButton={ this.isDisableButton }
          loginButton={ this.loginButton }
          onInputChange={ this.onInputChange }
        />
        <Search />
        <Album />
        <Favorites />
        <Profile />
        <ProfileEdit />
        <NotFound />
      </main>
    );
  }
}

export default App;
