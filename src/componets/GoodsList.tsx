import { Good } from './types/typesdef';

interface Props {
  goods: Good[];
}

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {
        goods.map(good => {
          return (
            <li key={good.key}>
              {good.goodName}
            </li>
          );
        })
      }
    </ul>
  );
};
