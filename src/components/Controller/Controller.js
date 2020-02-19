import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '../Select/Select';
import './Controller.css';

export class Controller extends React.PureComponent {
  render() {
    const {
      reverse,
      sort,
      sortLength,
      onselect,
      currentSelected,
      reset,
    } = this.props;

    return (
      <div className="jumbotron">
        <button
          type="button"
          onClick={reverse}
          className="btn btn-danger btn-sm "
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={sort}
          className="btn btn-danger btn-sm "
        >
          Sort A-Z
        </button>

        <button
          type="button"
          onClick={sortLength}
          className="btn btn-danger btn-sm "
        >
        Sort by Length
        </button>

        <Select
          onselect={onselect}
          currentSelected={currentSelected}
        />

        <button
          type="button"
          onClick={reset}
          className="btn btn-danger btn-sm "
        >
          Reset
        </button>

      </div>
    );
  }
}

Controller.propTypes = {
  reverse: PropTypes.func,
  sort: PropTypes.func,
  sortLength: PropTypes.func,
  onselect: PropTypes.func,
  currentSelected: PropTypes.string,
  reset: PropTypes.func,
};

Controller.defaultProps = {
  reverse: () => {},
  sort: () => {},
  sortLength: () => {},
  onselect: () => {},
  currentSelected: '',
  reset: () => {},
};
