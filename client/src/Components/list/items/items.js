import React from 'react';
import './items.css';
const Items = (props) => {
  return (
    <div className='bod'>
      <h1 className='heading'>{props.name}</h1>
      <p className='date'>
        <b>D.O.B:</b> {props.date}
      </p>
      <p className='Phone_no'>
        <b>Phone No.:</b> {props.phone}
      </p>
      <p className='Org_name'>
        <b>Organisation Name:</b> {props.Org}
      </p>
      <p className='Rating'>
        <b>Rating:</b> {props.rate}
      </p>
    </div>
  );
};

export default Items;
