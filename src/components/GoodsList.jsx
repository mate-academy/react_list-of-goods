export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li data-cy="Good" key={good}>{good}</li>
    ))}
  </ul>
);
