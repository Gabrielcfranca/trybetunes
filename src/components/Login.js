import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    const {
      isDisableButton,
      loginNameInput,
      onInputChange,
    } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <div>
            Nome:
            <input
              data-testid="login-name-input"
              type="text"
              name="loginNameInput"
              onChange={ onInputChange }
              value={ loginNameInput }
            />
            <button
              data-testid="login-submit-button"
              name="login"
              className="form-button"
              type="button"
              disabled={ isDisableButton }
              onClick={ () => createUser({ name: userName }) }
            >
              Salvar
            </button>
          </div>
        </form>
        <p>TrybeTunes Showww</p>
      </div>
    );
  }
}

Login.propTypes = {
  isDisableButton: PropTypes.bool.isRequired,
  loginNameInput: PropTypes.string.isRequired,
  onInputChange: PropTypes.string.isRequired,
};

export default Login;
