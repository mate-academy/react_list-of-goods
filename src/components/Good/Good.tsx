interface GoodProps {
  good: string;
}

export const Good: React.FC<GoodProps> = ({ good }) => {
  return <li data-cy="Good">{good}</li>;
};
