import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(({ goods }) => (
  <>
    {goods.map(item => <li key={item} className="subtitle is-5">{item}</li>)}
  </>
));

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
