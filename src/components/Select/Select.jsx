import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

export const Select = React.memo(
  ({
    action,
    wasStarted,
    targetLength,
    initList,
  }) => (
    <select
      className="Select"
      value={targetLength}
      hidden={wasStarted}
      onChange={action}
    >
      {initList.map((item, index) => (
        <option key={item}>
          {index + 1}
        </option>
      ))}
    </select>
  ),
);

Select.propTypes = {
  action: PropTypes.func.isRequired,
  initList: PropTypes.arrayOf(PropTypes.string).isRequired,
  targetLength: PropTypes.number.isRequired,
  wasStarted: PropTypes.bool.isRequired,
};
