import React from 'react';

function Start({ showGoods }) {
  return (
    <button onClick={showGoods} type="submit" className="ui blue button">
      Start
    </button>
  );
}

export default Start;
