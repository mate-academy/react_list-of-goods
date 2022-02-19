import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getVisibleProduct(
  basket: string[],
  sortBy: string,
  reversed: boolean,
  selectValue: string,
): string[] {
  switch (sortBy) {
    case 'alphabetically':
      basket.sort();
      break;

    case 'length':
      basket.sort((a, b) => a.length - b.length);
      break;

    default:
  }

  if (reversed) {
    basket.reverse();
  }

  return basket.filter((product) => product.length >= +selectValue);
}

type State = {
  basket: string[]
  sortBy: string
  reversed: boolean
  selectValue: string
};

class App extends React.Component<{}, State> {
  state: State = {
    basket: [],
    sortBy: '',
    reversed: false,
    selectValue: '1',
  };

  setSelectedValue(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      selectValue: event.currentTarget.value,
    });
  }

  initialBasket() {
    this.setState({
      basket: [...goodsFromServer],
    });
  }

  reverseBasket() {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  }

  sortByAlphbet() {
    this.setState({
      sortBy: 'alphabetically',
      reversed: false,
    });
  }

  sortByLength() {
    this.setState({
      sortBy: 'length',
      reversed: false,
    });
  }

  resetToInitialState() {
    this.setState({
      sortBy: '',
      reversed: false,
      selectValue: '1',
      basket: [...goodsFromServer],
    });
  }

  render() {
    const {
      basket,
      sortBy,
      reversed,
      selectValue,
    } = this.state;
    const visibleProduct = getVisibleProduct(basket, sortBy, reversed, selectValue);

    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="title">
            Goods
          </h1>
        </div>
        <button
          type="button"
          onClick={this.initialBasket}
        >
          Start
        </button>
        <button
          type="button"
          onClick={() => {
            this.reverseBasket();
          }}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => {
            this.sortByAlphbet();
          }}
        >
          Sort by alphabetically
        </button>
        <button
          type="button"
          onClick={() => {
            this.resetToInitialState();
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => {
            this.sortByLength();
          }}
        >
          Sort by length
        </button>
        <select
          value={this.state.selectValue}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            this.setSelectedValue(event);
          }}
        >
          {options.map(el => (
            <option value={`${el}`}>{el}</option>
          ))}
        </select>
        <GoodsList products={visibleProduct} />
      </div>
    );
  }
}

export default App;
