import React, { MouseEventHandler } from 'react';

interface Props {
  handler: MouseEventHandler,
}

export const StartPage: React.FC<Props> = ({ handler }) => {
  return (
    <button
      type="button"
      onClick={handler}
    >
      Start
    </button>
  );
};
