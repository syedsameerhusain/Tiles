import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const style = {
  color: 'white',
  backgroundColor: 'red',
  boxSizing: 'border-box',
  width: '730px',
  height: '30px',
  border: '1px solid red',
  textAlign: 'center',
  borderRadius: '5px',
  marginLeft: '170px',
  marginTop: '50px',
};
const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className='alert danger' style={style}>
      {alert.msg}
    </div>
  ));

Alerts.propTypes = {
  alerts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alerts,
});
export default connect(mapStateToProps)(Alerts);
