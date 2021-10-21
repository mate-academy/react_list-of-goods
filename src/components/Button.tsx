import { FC } from 'react';

type Props = {
  name: string;
  clickHandler(): void;
};

export const Button: FC<Props> = ({ name, clickHandler }) => (
  <button
    type="button"
    onClick={clickHandler}
  >
    {name}
  </button>
);
