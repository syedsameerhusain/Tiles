import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
const Landing = () => {
  return (
    <Fragment className='land_body'>
      <h1 className='text'>Welcome to Malik Ventures</h1>

      <button className='button button1'>
        <Link className='button' to='/Login'>
          Login
        </Link>
      </button>

      <button className='button button2'>
        <Link className='button' to='/Register'>
          Register
        </Link>
      </button>

      <h4>Let's Login,if you are not registered then register first</h4>
    </Fragment>
  );
};
export default Landing;
