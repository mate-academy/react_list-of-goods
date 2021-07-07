import React from 'react';
import PropTypes from 'prop-types';
import { Options } from './Options';

export class Select extends React.PureComponent {
  render() {
    const { onChange, defaultValue, options } = this.props;

    return (
      <select
        className="btn btn-success dropdown-toggle"
        value={defaultValue}
        onChange={event => onChange(+event.target.value)}
      >
        <Options options={options} />
      </select>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
};
