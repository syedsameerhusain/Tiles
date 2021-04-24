import React, { Component } from 'react';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Login extends Component {
  state = {
    LoginData: { email: '', password: '' },
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    let { login } = this.props;
    let { email, password } = this.state.LoginData;
    login(email, password);
  };
  onChangeHandler = (e) => {
    this.setState({
      LoginData: {
        ...this.state.LoginData,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    let { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to='/List' />;
    }
    return (
      <div className='container'>
        <h1 class='head text'>Login View</h1>
        <form
          className='submission-form'
          onSubmit={(e) => this.onSubmitHandler(e)}
        >
          <input
            placeholder='Email Address'
            type='email'
            name='email'
            id='email'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.LoginData.email}
          />

          <input
            placeholder='Password'
            type='password'
            name='password'
            id='password'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.LoginData.password}
          />
          <button type='submit' value='login'>
            Submit
          </button>
          <p>
            Don't have account
            <Link to='/Register' className='link-dec'>
              Register Here
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
