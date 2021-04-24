import React, { Component, Fragment } from 'react';
import './form.css';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { formData } from '../../actions/formData';
import PropTypes from 'prop-types';
class FormData extends Component {
  state = {
    DataForm: {
      name: '',
      date: '',
      Phone_no: '',
      Organisation_name: '',
      Rating: '',
    },
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const {
      name,
      date,
      Organisation_name,
      Rating,
      Phone_no,
    } = this.state.DataForm;
    const { setAlert, formData } = this.props;

    if (name === '') {
      setAlert('Name is Missing', 'danger');
      if (date === '') {
        setAlert('Date is not set', 'danger');
        if (Organisation_name === '') {
          setAlert('Organisation Name is not Selected', 'danger');
          if (Rating === '') {
            setAlert('Rating is not given', 'danger');
            if (Phone_no === '') {
              setAlert('Phone No. is not entered', 'danger');
            }
          }
        }
      }
    } else {
      formData(name, date, Organisation_name, Rating, Phone_no);
      console.log('Success');
    }
  };
  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      DataForm: { ...this.state.DataForm, [name]: value },
    });
  };
  render() {
    return (
      <div className='container'>
        <h1 class='head text'>Form View</h1>
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
            value={this.state.DataForm.name}
          />
          <input
            placeholder='Date : DD/MM/YYYY'
            type='date'
            name='date'
            id='date'
            onChange={(e, date) => this.onChangeHandler(e)}
            value={this.state.DataForm.date}
          />
          <input
            placeholder='Phone No.'
            type='text'
            name='Phone_no'
            id='Phone_no'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.DataForm.Phone_no}
            maxLength='10'
          />

          <select
            name='Organisation_name'
            id='Organisation_name'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.DataForm.Organisation_name}
          >
            <option value=''>Choose Your Organisation</option>
            <option value='Org1'>Org1</option>
            <option value='Org2'>Org2</option>
            <option value='Org3'>Org3</option>
            <option value='Org4'>Org4</option>
          </select>
          <select
            name='Rating'
            id='Rating'
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.DataForm.Rating}
          >
            <option value=''>Rating</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
FormData.propTypes = {
  setAlert: PropTypes.func.isRequired,
  formData: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
export default connect(null, { setAlert, formData })(FormData);
