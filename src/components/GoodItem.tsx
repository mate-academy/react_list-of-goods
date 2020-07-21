import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface Props {
  good: string;
}
export const GoodItem: FC<Props> = (props) => {
  const { good } = props;

  return (
    <li>
      {good}
    </li>
  );
};

GoodItem.propTypes = {
  good: PropTypes.string.isRequired,
};
