import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Select.scss';

const options = new Array(10).fill(0).map((item, i) => i + 1);

const Select = ({ action, visible }) => (
  <select
    className={cn('select', { 'select--hide': !visible })}
    onChange={e => action(e.target.value)}
  >
    {options.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  action: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Select;
