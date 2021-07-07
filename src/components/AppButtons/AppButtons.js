import React from 'react';

import { AppButton } from '../AppButton';
import { AppButtonsPropTypes } from '../propTypes/AppButtonsPropTypes';

export const AppButtons = ({
  reverseList,
  sortByAlph,
  sortByLength,
  reset,
}) => (
  <div>
    <AppButton onClickFunc={reverseList} title="Reverse" />
    <AppButton onClickFunc={sortByAlph} title="Sort Alphabetically" />
    <AppButton onClickFunc={reset} title="Reset" />
    <AppButton onClickFunc={sortByLength} title="Sort by length" />
  </div>
);

AppButtons.propTypes = AppButtonsPropTypes;
