import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
class Register extends Component {
  state = {
    Registration_Data: {
      name: '',
      email: '',
      password: '',
      conformPassword: '',
    },
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      conformPassword,
    } = this.state.Registration_Data;
    const { setAlert, register } = this.props;
    if (password !== conformPassword) {
      setAlert("Password don't match", 'danger');
    } else {
      register({ name, email, password });
      console.log(this.state.Registration_Data);
      console.log('Success');
    }
  };
  onChangeHandler = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      Registration_Data: { ...this.state.Registration_Data, [name]: value },
    });
  };
  render() {
    let { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to='/List' />;
    }
    return (
      <div className=' text container'>
        <h1 className='head'>Sign Up</h1>
        <form
          className='submission-form'
          onSubmit={(e) => this.onSubmitHandler(e)}
        >
          <input
            placeholder='Name'
            type='text'
            name='name'
            id='name'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.Registration_Data.name}
          />
          <input
            placeholder='Email'
            type='email'
            name='email'
            id='email'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.Registration_Data.email}
          />
          <input
            placeholder='Password'
            type='password'
            name='password'
            id='password'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.Registration_Data.password}
          />

          <input
            placeholder='Conform Password'
            type='password'
            name='conformPassword'
            id='conformPassword'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.Registration_Data.conformPassword}
          />
          <button type='submit' value='register'>
            Submit
          </button>
          <p>
            Already have account
            <Link to='/login' className='link-dec'>
              {'   '}Login Here
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
