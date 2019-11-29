import React from 'react';

// eslint-disable-next-line react/prop-types
function Reverse({ reverse }) {
  const btnReverse = (
    <button
      type="button"
      onClick={reverse}
      className="reverse"
    >
      Reverse
    </button>
  );

  return (
    <>
      { btnReverse }
    </>
  );
}

export default Reverse;
