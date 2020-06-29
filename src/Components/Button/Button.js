import React from 'react';

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
