import React from 'react';

function Start({ showGoods }) {
  return (
    <div className="start">
      <button
        className="start__button btn btn-outline-dark"
        type="button"
        onClick={showGoods}
      >
        START
      </button>
    </div>
  );
}

export default Start;
