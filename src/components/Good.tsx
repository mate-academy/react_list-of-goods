type GoodProps = {
  name: string
};

export const Good = ({ name }: GoodProps) => <li data-cy="Good">{name}</li>;
