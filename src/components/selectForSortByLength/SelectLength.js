import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';

class SelectLength extends React.PureComponent {
  generateOptions = () => {
    const optionsArr = Array(10).fill('');

    return optionsArr.map((item, index) => ({
      key: index + 1,
      value: index + 1,
      text: index + 1,
    }));
  }

  render() {
    const { clickFunction } = this.props;

    return (
      <Select
        placeholder="Select length"
        options={this.generateOptions()}
        onChange={clickFunction}
      />
    );
  }
}

SelectLength.propTypes = {
  clickFunction: PropTypes.func.isRequired,
}

export default SelectLength;
