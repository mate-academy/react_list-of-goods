import { PureComponent } from 'react';
import './GoodsList.css';

type Props = {
  goods: string[],
};

type State = {};

class GoodsList extends PureComponent<Props, State> {
  render() {
    return (
      <ul>
        {this.props.goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  }
}

export default GoodsList;
