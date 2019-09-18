import React from 'react';
import Proptypes from 'prop-types';
import './Start.css';

function Start({ showGoods }) {
  return (
    <div className="start">
      <button
        className="start__button"
        type="button"
        onClick={showGoods}
      >
          START
      </button>
    </div>
  );
}

Start.propTypes = ({
  showGoods: Proptypes.func,
}).isRequired;

export default Start;
