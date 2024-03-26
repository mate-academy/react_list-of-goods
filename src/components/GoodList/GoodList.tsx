import { Good } from '../Good/Good';

interface GoodListProps {
  goods: string[];
}

export const GoodList: React.FC<GoodListProps> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <Good key={good} good={good} />
      ))}
    </ul>
  );
};
