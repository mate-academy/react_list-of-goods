import React from 'react';
import PropTypes from 'prop-types';
import { Thing } from '../Thing/Thing';

export const Things = ({ content }) => (
  <ul>
    {
      content.map(thing => <Thing name={thing} />)
    }
  </ul>
);

Things.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
