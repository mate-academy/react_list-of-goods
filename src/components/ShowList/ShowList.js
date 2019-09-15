import React from 'react';
import PropTypes from 'prop-types';

const ShowList = ({ listOfGoods }) => (
  <ul className="list-group list-group-flush">
    {listOfGoods.map(item => <li className="list-group-item">{item}</li>)}
  </ul>
);

ShowList.propTypes = {
  listOfGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShowList;
