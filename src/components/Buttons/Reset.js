import React from 'react';

// eslint-disable-next-line react/prop-types
function Reset({ reset }) {
  const btnReset = (
    <button
      type="button"
      onClick={reset}
      className="reset"
    >
      Reset
    </button>
  );

  return (
    <>
      { btnReset }
    </>
  );
}

export default Reset;
