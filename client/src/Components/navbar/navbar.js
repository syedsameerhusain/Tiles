import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
class Navbar extends Component {
  render() {
    const {
      auth: { isAuthenticated, loading },
      logout,
    } = this.props;
    const authlinks = (
      <ul>
        <li>
          <Link onClick={logout} className='dec' to='/'>
            Logout
          </Link>
        </li>
        <li>
          <Link className='dec bor' to='/List'>
            List
          </Link>
        </li>
        <li>
          <Link className='dec bor' to='/FormData'>
            Form
          </Link>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul>
        <li>
          <Link className='dec ' to='/Register'>
            Register
          </Link>
        </li>
        <li>
          <Link className='dec bor' to='/Login'>
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <nav>
        <Link className='heading' to='/'>
          <h1 className='Heading-Logo'>Malik Ventures</h1>
        </Link>
        {!loading && (
          <Fragment>{isAuthenticated ? authlinks : guestLinks}</Fragment>
        )}
      </nav>
    );
  }
}
Navbar.protoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateProps, { logout })(Navbar);
