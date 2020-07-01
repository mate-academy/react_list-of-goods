import React from 'react';
import PropTypes from 'prop-types';
import { Thing } from '../Thing/Thing';
import styles from './Things.module.css';

export const Things = ({ content }) => (
  <ul className={styles.list}>
    {
      content.map(thing => <Thing key={thing} name={thing} />)
    }
  </ul>
);

Things.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
