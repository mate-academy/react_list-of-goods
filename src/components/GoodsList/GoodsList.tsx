type Props = {
  goods: string[];
};

const GoodsList: React.FC<Props> = ({
  goods,
}) => (
  <ul className="goodList">
    {goods.map(good => (
      <li data-cy="Good">
        {good}
      </li>
    ))}
  </ul>
);

export default GoodsList;
