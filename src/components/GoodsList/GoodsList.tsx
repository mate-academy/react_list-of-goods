type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="app__list">
    {goods.map(good => (
      <li className="app__good" key={good}>
        {good}
      </li>
    ))}
  </ul>
);
