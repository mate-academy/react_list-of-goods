/* eslint-disable no-console */
import React from 'react';
import classNames from 'classnames';

type Props = {
  buttonType: string,
  callback: (() => void)
  buttonChoose: boolean,
};

export class Button extends React.PureComponent<Props> {
  render() {
    const { buttonType, buttonChoose } = this.props;

    return (
      <>
        <button
          type="button"
          className={classNames('button', { 'is-success': buttonChoose, 'is-warning': !buttonChoose })}
          onClick={this.props.callback}
        >
          {buttonType}
        </button>
        {' '}
      </>
    );
  }
}
