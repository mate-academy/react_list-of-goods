import React from 'react';
import PropTypes from 'prop-types';

const Goods = ({ goodsList, visibility, changedList }) => {
  const currentClass = visibility ? 'visible__list' : 'list';
  const currentList = changedList.length > 0 ? changedList : goodsList;

  return (
    <ul className={currentClass}>
      {currentList
        .map(item => <li>{item}</li>)}
    </ul>
  );
};

Goods.propTypes = {
  goodsList: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired,
  changedList: PropTypes.string.isRequired,
};

export default Goods;
