import { GoodCard } from './GoodCard';

export const GoodList = ({ goods }: { goods: string[] }) => (
  <ul>
    {goods.map((good: string) => (
      <GoodCard good={good} key={good} />
    ))}
  </ul>
);
