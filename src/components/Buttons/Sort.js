import React from 'react';

// eslint-disable-next-line react/prop-types
function Sort({ sort }) {
  return (
    <>
      {
        <button
          type="button"
          onClick={sort}
          className="sort"
        >
          Sort
        </button>
      }
    </>
  );
}

export default Sort;
