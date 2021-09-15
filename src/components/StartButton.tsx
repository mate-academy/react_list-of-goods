import React from 'react';

type Props = {
  method: () => void;
};

export const StartButton: React.FC<Props> = (props) => {
  const { method } = props;

  // eslint-disable-next-line no-console
  console.log('Start Button');

  return (
    <button
      type="button"
      className="btn btn-primary btn-lg btn-block col-12"
      onClick={method}
    >
      Start
    </button>
  );
};
