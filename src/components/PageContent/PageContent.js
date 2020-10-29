import React from 'react';
import PropTypes from 'prop-types';
import { GoodListPropTypes } from '../propTypes/GoodListPropTypes';
import { AppButtons } from '../AppButtons';
import { GoodsList } from '../GoodsList';
import { AppButtonsPropTypes } from '../propTypes/AppButtonsPropTypes';

export const PageContent = ({
  goods,
  reverseList,
  sortByAlph,
  sortByLength,
  reset,
}) => (
  <>
    <AppButtons
      reverseList={reverseList}
      sortByAlph={sortByAlph}
      sortByLength={sortByLength}
      reset={reset}
    />
    <GoodsList goods={goods} />
  </>
);

PageContent.propTypes = PropTypes.shape({
  goods: PropTypes.shape(GoodListPropTypes).isRequired,
  AppButtonsPropTypes,
}).isRequired;
