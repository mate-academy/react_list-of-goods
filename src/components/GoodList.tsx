interface Good {
  id: number;
  name: string;
}

type Prop = {
  goods: Good[];
};

export const GoodList: React.FC<Prop> = ({ goods }) => {
  return (
    <ul>
      {goods.map((good) => {
        return (
          <li data-cy="Good" key={good.id}>{good.name}</li>
        );
      })}
    </ul>
  );
};
