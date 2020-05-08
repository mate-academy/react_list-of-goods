import React from 'react';
// import PropTypes from 'prop-types';
import './Good.scss';

export const Good = ({ good }) => (
  <div className="good">
    {good}
  </div>
);


//
// MovieCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   imgUrl: PropTypes.string.isRequired,
//   imdbUrl: PropTypes.string.isRequired,
// };
//
// MovieCard.defaultProps = {
//   description: '',
// };
