import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      // isDisableButton: true,
      loginNameInput: '',
      loading: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  async callAPI() {
    const { history } = this.props;
    const { loginNameInput } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({ name: loginNameInput });
    history.push('/search');
  }

  render() {
    const {
      loginNameInput,
      loading,
    } = this.state;

    const maxLengthInput = 3;

    return (
      <div data-testid="page-login">
        {
          loading && <Loading />
        }
        <form>
          <div>
            Nome:
            <input
              data-testid="login-name-input"
              type="text"
              name="loginNameInput"
              onChange={ this.onInputChange }
              value={ loginNameInput }
            />
            <button
              data-testid="login-submit-button"
              name="login"
              className="form-button"
              type="button"
              disabled={ loginNameInput.length < maxLengthInput }
              onClick={ () => this.callAPI() }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Login;
