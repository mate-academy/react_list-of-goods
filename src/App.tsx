import React from 'react';
import './App.css';

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
          onClick={() => {
            this.setState({
              basket: [...goodsFromServer],
            });
          }}
        >
          Start
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState(state => ({
              reversed: !state.reversed,
            }));
          }}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              sortBy: 'alphabetically',
              reversed: false,
            });
          }}
        >
          Sort by alphabetically
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              sortBy: '',
              reversed: false,
              selectValue: '1',
              basket: [...goodsFromServer],
            });
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              sortBy: 'length',
              reversed: false,
            });
          }}
        >
          Sort by length
        </button>
        <select
          value={this.state.selectValue}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            this.setState({
              selectValue: event.currentTarget.value,
            });
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <ul className="products">
          {visibleProduct.map((product) => (
            <li
              key={product}
            >
              {product}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
