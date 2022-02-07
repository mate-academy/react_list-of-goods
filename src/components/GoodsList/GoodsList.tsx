import './GoodsList.scss';

type Props = {
  goods: string[],
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods__list">
    {goods.map(value => (
      <li className="goods__item" key={value}>
        {value}
      </li>
    ))}
  </ul>
);

export default GoodsList;
