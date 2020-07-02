import React from 'react';
import PropTypes from 'prop-types';
import { SortButton } from '../SortButton/SortButton';
import { validButton } from '../../validProps';

export function SortButtons({ buttons }) {
  return (
    <div>
      {buttons.map(button => (
        <SortButton
          key={button.name}
          name={button.name}
          handler={button.handler}
        />
      ))}
    </div>
  );
}

SortButtons.propTypes = {
  buttons: PropTypes.arrayOf(validButton).isRequired,
};
