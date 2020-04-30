import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import drawSvg from '../helpers/drawSvg';

const Commodity = ({ commodity }) => (
  <li className="goods__item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1898 1898"
      width="40"
      height="40"
    >
      {ReactHtmlParser(drawSvg(commodity))}
    </svg>
    &nbsp;
    {commodity}
  </li>
);

Commodity.propTypes = {
  commodity: PropTypes.string.isRequired,
};

export default Commodity;
