import React from 'react';

// eslint-disable-next-line react/prop-types
function Sort({ sort }) {
  const btnSort = (
    <button
      type="button"
      onClick={sort}
      className="sort"
    >
      Sort
    </button>
  );

  return (
    <>
      { btnSort }
    </>
  );
}

export default Sort;
