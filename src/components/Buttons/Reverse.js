import React from 'react';

// eslint-disable-next-line react/prop-types
function Reverse({ reverse }) {
  return (
    <>
      {
        <button
          type="button"
          onClick={reverse}
          className="reverse"
        >
          Reverse
        </button>
      }
    </>
  );
}

export default Reverse;
