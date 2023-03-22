import { GoodsItem } from '../GoodItem/GoodItem';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <GoodsItem good={good} key={good} />
    ))}
  </ul>
);
