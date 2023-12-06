type Props = {
  goods: string[];
};

export const Goods: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      <ul>
        {goods.map(good => (
          <li data-cy="Good">{good}</li>
        ))}
      </ul>
    </ul>
  );
};
