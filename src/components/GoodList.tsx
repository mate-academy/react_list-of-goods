export const GoodList: React.FC<{ goods: string[] }> = ({ goods }) => (
  <>
    <ul>
      {
        goods.map((good) => (
          <li data-cy="Good" key={good}>{good}</li>
        ))
      }
    </ul>
  </>
);
