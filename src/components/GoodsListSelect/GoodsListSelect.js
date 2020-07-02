import React, { useState } from 'react';
import PropTypes from 'prop-types';

const selectValues = [];

// eslint-disable-next-line no-plusplus
for (let i = 1; i < 11; i++) {
  selectValues.push(i);
}

const GoodsListSelect = (props) => {
  const [selectedValue, setSelectedValue] = useState(
    selectValues[selectValues.length - 1],
  );

  const onChange = (event) => {
    const { value } = event.target;

    setSelectedValue(value);
    props.setMinLength(Number(value));
  };

  return (
    <select
      className="custom-select"
      onChange={onChange}
      value={selectedValue}
    >
      {
        selectValues.map(value => (
          <option key={value}>{value}</option>
        ))
      }
    </select>
  );
};

export { GoodsListSelect };

GoodsListSelect.propTypes = {
  setMinLength: PropTypes.func.isRequired,
};
