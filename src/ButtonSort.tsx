import React from 'react';

type Props = {
  sortGoods: (sortItem: 'a-z' | 'length') => void;
  sortBy: 'a-z' | 'length';
};

export const ButtonSort: React.FC<Props> = React.memo(
  (props) => {
    const { sortGoods, sortBy } = props;

    return (
      <button
        type="button"
        onClick={() => sortGoods(sortBy)}
        className="btn btn-primary"
      >
        {sortBy === 'a-z'
          ? 'Sort alphabetically'
          : 'Sort by length'}
      </button>
    );
  },
);
