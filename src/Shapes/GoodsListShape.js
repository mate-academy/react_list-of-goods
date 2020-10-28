import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';

export const GoodsListShape = PropTypes.arrayOf(GoodShape).isRequired;
