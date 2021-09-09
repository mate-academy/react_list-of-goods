import React from 'react';

type Props = {
  reset: () => void;
};

export const ButtonReset: React.FC<Props> = React.memo(
  (props) => {
    const { reset } = props;

    return (
      <button
        type="button"
        onClick={reset}
        className="btn btn-danger"
      >
        Reset
      </button>
    );
  },
);
