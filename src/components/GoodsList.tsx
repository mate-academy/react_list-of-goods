import './GoodsList.css';

interface Props {
  preparedGoods: string[],
}

export const GoodsList: React.FC<Props> = ({ preparedGoods }) => {
  return (
    <ul className="list">
      {preparedGoods.map(good => (
        <li className="list__item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
