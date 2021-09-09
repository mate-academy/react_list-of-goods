import { PureComponent } from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  goods: string[],
};

interface State {
  isReversed: boolean,
  sortBy: string,
}

export class GoodsList extends PureComponent<Props, State> {
  state = {
    sortBy: '',
    isReversed: false,
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  resetGoods = () => {
    this.setState({ sortBy: '', isReversed: false });
  };

  getVisibleGoods = () => {
    const { isReversed, sortBy } = this.state;
    const { goods } = this.props;

    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render() {
    const visibleGoods = this.getVisibleGoods();

    return (
      <div className="App__goods">
        <ul className="App__goods-list">
          {visibleGoods.map(good => (
            <li
              className="App__goods-item"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>

        <Button
          variant="info"
          type="button"
          className="App__button"
          onClick={this.reverseGoods}
        >
          Reverse Goods
        </Button>
        <Button
          variant="info"
          type="button"
          className="App__button"
          onClick={this.sortByAlphabetically}
        >
          Sort Alphabetically
        </Button>
        <Button
          variant="info"
          type="button"
          className="App__button"
          onClick={this.sortByLength}
        >
          Sort by length
        </Button>
        <Button
          variant="info"
          type="button"
          className="App__button"
          onClick={this.resetGoods}
        >
          Reset Goods
        </Button>
      </div>
    );
  }
}
