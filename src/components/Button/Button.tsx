import React from 'react';
import classNames from 'classnames';
import './Button.scss';

type Props = {
  name: string;
  active: boolean;
  action: () => void;
};

export const Button: React.FC<Props> = React.memo((props) => {
  const {
    name,
    active,
    action,
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        {
          'btn btn-primary': active,
          'btn btn-secondary': !active,
        }, 'Button',
      )}
      onClick={action}
    >
      {name}
    </button>
  );
});
