type Props = {
  filteredList: string[],
};

export const ListOfGoods: React.FC<Props> = ({ filteredList }) => (
  <ul>
    {filteredList.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);
