import React from 'react';
import classNames from 'classnames';

type Props = {
  buttonType: string,
  callback: (() => void)
  buttonChoose: boolean,
};

export const Button: React.FC<Props> = (props) => {
  const { buttonType, buttonChoose } = props;

  return (
    <>
      <button
        type="button"
        className={classNames('button', { 'is-success': buttonChoose, 'is-warning': !buttonChoose })}
        onClick={props.callback}
      >
        {buttonType}
      </button>
      {' '}
    </>
  );
};
