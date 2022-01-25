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
  showList: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    listOfGoods: [...goodsFromServer],
    showList: false,
  };

  showItems = () => {
    this.setState((state) => ({
      showList: !state.showList,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      listOfGoods: [...state.listOfGoods.reverse()],
    }));
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      listOfGoods: [...state.listOfGoods.sort((item1, item2) => (item1.localeCompare(item2)))],
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      listOfGoods: [...state.listOfGoods.sort((item1, item2) => (item1.length - item2.length))],
    }));
  };

  reset = () => {
    this.setState({ listOfGoods: [...goodsFromServer] });
  };

  render() {
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

        {this.state.showList && (
          <GoodsList goods={this.state.listOfGoods} />
        )}
      </div>
    );
  }
}

export default App;
