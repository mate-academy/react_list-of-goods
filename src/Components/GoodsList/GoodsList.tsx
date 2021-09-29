import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group">
      {goods.map(good => (
        <li
          className="list-group-item list-group-item-primary"
          key={good}
        >
          {good}
        </li>
      ))}
    </ul>
  );
};
