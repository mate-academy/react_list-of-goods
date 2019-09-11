import React, { Component } from 'react';
import './Button.scss';
import { ButtonTypes } from '../../constants/proptypes';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const { text } = this.props;

    return (
      <button
        className="button"
        onClick={this.handleClick}
        type="button"
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = ButtonTypes;
