import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export const Buttons = ({ reverse, sortWords, reset, sortLength }) => (
  <>
    <Button onClick={reverse} name="Reverse" />
    <Button onClick={sortWords} name="Sort alphabetically" />
    <Button onClick={reset} name="Reset" />
    <Button onClick={sortLength} name="Sort by length" />
  </>
);

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortWords: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortLength: PropTypes.func.isRequired,
};
