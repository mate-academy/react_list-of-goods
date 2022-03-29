type Props = {
  good: string,
};

export const GoodsItem: React.FC<Props> = ({ good }) => (
  <li className="Goods__item">
    {good}
  </li>
);
