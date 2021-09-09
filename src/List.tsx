import React from 'react';

import './App.scss';

import GoodsList from './GoodsList';

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
  goods: string[];
};

class Body extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
  };

  reverseGoods = () => {
    this.setState(({ goods }) => {
      const reversedArray = [...goods].reverse();

      return {
        goods: reversedArray,
      };
    });
  };

  sortGoods = () => {
    this.setState(({ goods }) => {
      const sortedArray = [...goods].sort();

      return {
        goods: sortedArray,
      };
    });
  };

  resetGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(({ goods }) => {
      const sortedByLenghArray = [...goods].sort((a, b) => a.length - b.length);

      return {
        goods: sortedByLenghArray,
      };
    });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.goods.map(item => <GoodsList item={item} />)}
          <div className="btns">
            <button type="button" className="btn btn-outline-success" onClick={this.reverseGoods}>Reverse</button>
            <button type="button" className="btn btn-outline-danger" onClick={this.sortGoods}>Sort</button>
            <button type="button" className="btn btn-outline-secondary" onClick={this.resetGoods}>Reset</button>
            <button type="button" className="btn btn-outline-info" onClick={this.sortByLength}>Sort by length</button>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
