import React, { FC } from 'react';

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
