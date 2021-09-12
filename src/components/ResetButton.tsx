import React from 'react';

type Props = {
  reset: () => void,
};

export const ResetButton: React.FC<Props> = (props) => {
  const { reset } = props;

  return (
    <button
      type="button"
      className="button"
      onClick={reset}
    >
      Reset
    </button>
  );
};
