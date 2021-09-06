import React from 'react';
import classNames from 'classnames';

type Props = {
  name: string;
  action: () => void;
  active: boolean;
};

export const Button: React.FC<Props> = React.memo((props) => {
  const { name, action, active } = props;

  return (
    <button
      type="button"
      className={classNames('btn', { 'btn-success': active, 'btn-danger': !active })}
      onClick={action}
    >
      {name}
    </button>
  );
});
