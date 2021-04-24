import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Items from './items/items';
import { connect } from 'react-redux';
import { loadList } from '../../actions/list';
import './list.css';
import Filter from './filter/filter';
const List = ({ loadList, data }) => {
  //filter started *************************************
  let list;
  const onChangeHandler = (e) => {
    console.log(Org1);
    console.log(R1);
    console.log();
  };
  const [Org1, setOrg1] = useState('false');
  const [Org2, setOrg2] = useState('false');
  const [Org3, setOrg3] = useState('false');
  const [Org4, setOrg4] = useState('false');
  const [R1, setR1] = useState('false');
  const [R2, setR2] = useState('false');
  const [R3, setR3] = useState('false');
  const [R4, setR4] = useState('false');
  const [R5, setR5] = useState('false');
  const [Lists, setLists] = useState();
  if (Lists !== undefined) {
    list = Lists.map((p) => {
      return (
        <Items
          name={p.name}
          date={p.date}
          Org={p.Organisation_name}
          phone={p.Phone_no}
          rate={p.Rating}
        />
      );
    });
  }
  useEffect(() => {
    loadList();
    setLists(data[0]);
  }, []);

  return (
    <div className='list'>
      <h1 className='text'>List</h1>
      <form className='filter' onSubmit={(e) => this.onSubmitHandler(e)}>
        <div className='org'>
          <h2>Organisation Name</h2>
          <input
            onChange={() => onChangeHandler()}
            className='datas-o'
            type='checkbox'
            checked={Org1}
            value='Org1'
            rate={Org1}
          />
          <label className='datas-o' htmlFor='Org1'>
            Org1
          </label>
          <input
            onClick={setOrg2}
            className='datas-o'
            type='checkbox'
            checked={Org2}
            value='Org2'
            rate={Org2}
          />
          <label className='datas-o' htmlFor='Org2'>
            Org2
          </label>
          <input
            onClick={setOrg3}
            className='datas-o'
            type='checkbox'
            checked={Org3}
            value='Org3'
            rate={Org3}
          />
          <label className='datas-o' htmlFor='Org3'>
            Org3
          </label>
          <input
            onChange={(e) => onChangeHandler(e)}
            className='datas-o'
            type='checkbox'
            name='Organisation'
            value='Org4'
            rate={Org4}
          />
          <label className='datas-o' htmlFor='Org4'>
            Org4
          </label>
        </div>
        <div className='rating'>
          <h2>Rating</h2>
          <input
            onChange={(e) => onChangeHandler(e)}
            className='datas-r'
            type='checkbox'
            name='Rating'
            value='1'
            rate={R1}
          />
          <label className='datas-r' htmlFor='1'>
            1
          </label>
          <input
            onChange={(e) => onChangeHandler(e)}
            className='datas-r'
            type='checkbox'
            name='Rating'
            value='2'
            rate={R2}
          />
          <label className='datas-r' htmlFor='2'>
            2
          </label>
          <input
            onChange={(e) => onChangeHandler(e)}
            className='datas-r'
            type='checkbox'
            name='Rating'
            value='3'
            rate={R3}
          />
          <label className='datas-r' htmlFor='3'>
            3
          </label>
          <input
            onChange={(e) => onChangeHandler(e)}
            className='datas-r'
            type='checkbox'
            name='Rating'
            value='4'
            rate={R4}
          />
          <label className='datas-r' htmlFor='4'>
            4
          </label>
          <input
            onChange={(e) => onChangeHandler(e)}
            className='datas-r'
            type='checkbox'
            name='Rating'
            value='5'
            rate={R5}
          />
          <label className='datas-r' htmlFor='5'>
            5
          </label>
        </div>
        <input type='submit' className='btn' />
      </form>
      <div className='listtt'>{list}</div>
    </div>
  );
};
List.propTypes = {
  data: PropTypes.array.isRequired,
  loadList: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.lists,
});
export default connect(mapStateToProps, { loadList })(List);
