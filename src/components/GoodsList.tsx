import { Good } from './Good';

type GoddsListProps = {
  goods: string[]
};

export const GoodsList = ({ goods }: GoddsListProps) => (
  <ul>
    {goods.map(good => <Good name={good} key={good} />)}
  </ul>
);
