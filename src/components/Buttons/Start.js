import React from 'react';

// eslint-disable-next-line react/prop-types
function Start({ open, shown }) {
  return (
    <>
      { shown
      || (
        <button
          type="button"
          onClick={open}
          className="start"
        >
        Start
        </button>
      ) }
    </>
  );
}

export default Start;
