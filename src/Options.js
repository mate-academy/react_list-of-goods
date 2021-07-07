import React from 'react';
import PropTypes from 'prop-types';
import { Option } from './Option';

export class Options extends React.PureComponent {
  render() {
    const { options } = this.props;

    return (
      <>
        {options.map(option => (
          <Option
            key={option}
            data={option + 1}
          />
        ))}
      </>
    );
  }
}

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};
