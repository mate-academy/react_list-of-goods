import React from 'react';
import PropTypes from 'prop-types';

export class Option extends React.PureComponent {
  render() {
    const { data } = this.props;

    return (
      <option value={data}>{data}</option>
    );
  }
}

Option.propTypes = {
  data: PropTypes.number.isRequired,
};
