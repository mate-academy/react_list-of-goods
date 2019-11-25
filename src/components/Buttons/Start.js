import React from 'react';

// eslint-disable-next-line react/prop-types
function Start({ open, shown }) {
  const btnStart = shown
  || (
    <button
      type="button"
      onClick={open}
      className="button start"
    >
      Start
    </button>
  );

  return (
    <>
      { btnStart }
    </>
  );
}

export default Start;
