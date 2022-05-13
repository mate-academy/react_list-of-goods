import { Good } from '../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        className="GoodsList"
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
