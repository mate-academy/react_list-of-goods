import React from 'react';
import { ButtonsShape } from './Shapes';

export class Buttons extends React.PureComponent {
  render() {
    const { onSort, onReverse, onReset, onLengthCase } = this.props;

    return (
      <>
        <button
          className="btn btn-success"
          type="button"
          onClick={onSort}
        >
          A-Z
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={onReverse}
        >
          Reverse
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={onLengthCase}
        >
          Length Sort
        </button>
      </>
    );
  }
}

Buttons.propTypes = ButtonsShape;
