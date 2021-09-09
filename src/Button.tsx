import React from 'react';

type Props = {
  action: () => void;
  stylingClass: string;
  text: string;
};

export const Button: React.FC<Props> = (props) => {
  const { action, stylingClass, text } = props;

  return (
    <button
      type="button"
      onClick={action}
      className={stylingClass}
    >
      {text}
    </button>
  );
};
