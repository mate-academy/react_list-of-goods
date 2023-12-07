import 'bulma/css/bulma.css';

type Props = {
  goods: string[];
};

export const Goods: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      <ul>
        {goods.map(good => (
          <li data-cy="Good" key={good}>{good}</li>
        ))}
      </ul>
    </ul>
  );
};
