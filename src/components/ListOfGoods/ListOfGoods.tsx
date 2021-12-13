import './ListOfGoods.scss';

type Props = {
  goods: string[],
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {
        goods.map(good => (
          <li key={good} className="list__item">{good}</li>
        ))
      }
    </ul>
  );
};
