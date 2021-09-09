import React from 'react';

type Props = {
  reverse: () => void;
};

export const ButtonReverse: React.FC<Props> = React.memo(
  (props) => {
    const { reverse } = props;

    return (
      <button
        type="button"
        onClick={reverse}
        className="btn btn-primary"
      >
        Reverse
      </button>
    );
  },
);
