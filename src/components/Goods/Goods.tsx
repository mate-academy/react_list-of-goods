type Props = {
  visibleGoods: string[],
};

export const Goods: React.FC<Props> = (props) => {
  const { visibleGoods } = props;

  return (
    <ul className="Goods">
      {visibleGoods.map((good, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className="Goods__item" key={`${good}+${index}`}>
          {good}
        </li>
      ))}
    </ul>
  );
};
