import PropTypes from 'prop-types';
import { GoodProps } from './GoodProps';

export const GoodListProps = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      ...GoodProps,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
