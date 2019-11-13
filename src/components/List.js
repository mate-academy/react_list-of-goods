import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const { goods } = props;

  return (
    <ul>
      {
        goods.map(good => <li key={good}>{good}</li>)
      }
    </ul>
  );
}

List.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired,
};

export default List;
