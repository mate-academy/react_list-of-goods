import React from 'react';
import PropTypes from 'prop-types';

export class SelectLengthButton extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.lengthSortingLimit !== this.props.lengthSortingLimit;
  }

  render() {
    const { selectLengthSorting, lengthSortingLimit } = this.props;

    return (
      <select
        value={lengthSortingLimit}
        onChange={selectLengthSorting}
        className="ui dropdown"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    );
  }
}

SelectLengthButton.propTypes = {
  lengthSortingLimit: PropTypes.string.isRequired,
  selectLengthSorting: PropTypes.func.isRequired,
};
