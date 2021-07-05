import React from 'react';
import PropTypes from 'prop-types';
import '../Buttons/Buttons.css';

export class Buttons extends React.Component {
  state = {
    buttons: this.props.buttons,
  }

  render() {
    const {buttons} = this.state;
    const { identifyButton } = this.props;
  
    return (
      buttons.map(buttonName => (
        <button
          key={buttonName}
          className="button"
          onClick={() => {
            identifyButton(buttonName);
          }}
        >
          {buttonName}
        </button>
      ))
    )
    
  };
};

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired),
}

