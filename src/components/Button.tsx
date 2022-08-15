import React, { MouseEventHandler } from 'react';

type Props = {
  text: string,
  className: string,
  method: MouseEventHandler<HTMLButtonElement>
};

export const Button: React.FC<Props> = ({ text, className, method }) => {
  return (
    <button
      type="button"
      onClick={method}
      className={className}
    >
      {text}
    </button>
  );
};
