import React from 'react';
import { buttonShapes } from '../../PropsShapes/PropShapes';

export class Button extends React.PureComponent {
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.props.click}
      >
        {this.props.buttonName}
      </button>
    );
  }
}

Button.propTypes = buttonShapes;
