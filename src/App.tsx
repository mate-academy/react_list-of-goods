import React from 'react';
import 'bulma/css/bulma.min.css';
import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  listOfGoods: string[];
  isShowed: boolean;
  isReverse: boolean;
  sortBy: string;
};

class App extends React.Component<{}, State> {
  state = {
    listOfGoods: [...goodsFromServer],
    isShowed: false,
    isReverse: false,
    sortBy: '',
  };

  showItems = () => {
    this.setState((state) => ({
      isShowed: !state.isShowed,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  typeOfSort = (item1: string, item2: string) => {
    switch (this.state.sortBy) {
      case 'alphabet':
        return item1.localeCompare(item2);

      case 'length':
        return item1.length - item2.length;

      default:
        return 0;
    }
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
    });
  };

  render() {
    const {
      listOfGoods,
      isReverse,
      isShowed,
      sortBy,
    } = this.state;

    const goodsCopy = [...listOfGoods];

    if (sortBy !== '') {
      goodsCopy.sort(this.typeOfSort);
    }

    if (isReverse) {
      goodsCopy.reverse();
    }

    return (
      <div className="box">
        <h1 className="title">Goods</h1>
        <div className="block">
          <button
            type="button"
            className="button is-success is-light"
            onClick={this.showItems}
          >
            Start
          </button>
          {' '}
          <button
            type="button"
            className="button is-link is-light"
            onClick={this.reverse}
          >
            Reverse
          </button>
          {' '}
          <button
            type="button"
            className="button is-warning is-light"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>
          {' '}
          <button
            type="button"
            className="button is-danger is-light"
            onClick={this.reset}
          >
            Reset
          </button>
          {' '}
          <button
            type="button"
            className="button is-info is-light"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>

        {isShowed && (
          <GoodsList goods={goodsCopy} />
        )}
      </div>
    );
  }
}

export default App;
