import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.onClick}
        className={this.props.className}
      >
        {this.props.children}
        {/* {isActive ? 'Show all' : 'Show not completed'} */}
      </button>
    );
  }
}

export default Button;
