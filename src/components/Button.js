import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export class MyButton extends React.PureComponent {
  render() {
    const { text, onClick } = this.props;

    return (
      <Button
        type="button"
        onClick={onClick}
        variant="outline-success"
        className="rounded-pill m-2"
      >
        {text}
      </Button>
    );
  }
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
