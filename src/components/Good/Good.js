import React from 'react';
import PropTypes from 'prop-types';
import './Good.scss';

import { GoodShape } from '../shapes/GoodShape';

export const Good = React.memo(({ good }) => (
  <li className="good">
    {good.name}
  </li>
));

Good.propTypes = PropTypes.shape(GoodShape).isRequired;
