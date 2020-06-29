import React from 'react';
import { ShapeButton } from '../Shapes/ShapeButton';

export class Button extends React.PureComponent {
  render() {
    return (
      <div className="">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.onClick}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

Button.propTypes = ShapeButton.isRequired;
