import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  click: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
