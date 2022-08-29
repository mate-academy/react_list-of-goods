import React from 'react';

type Props = {
  name: string;
};

export const Good: React.FC<Props> = ({ name }) => {
  return (
    <li className="Goods__item">{name}</li>
  );
};
