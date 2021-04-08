import React from 'react';
import './App.css';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isGoodsVisible: false,
  }

  showGoods = () => {
    this.setState(prevState => ({
      isGoodsVisible: !prevState.isGoodsVisible,
    }));
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((good1, good2) => good1.localeCompare(good2)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((good1, good2) => good1.length - good2.length),
    }));
  }

  resetGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  render() {
    const { goods, isGoodsVisible } = this.state;

    return (
      <div className="App">
        {!isGoodsVisible
          ? (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Show goods
            </button>
          )
          : (
            <>
              <h1>
                Goods
              </h1>
              <p>
                {`Number of goods: ${goods.length}`}
              </p>
              <button
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse goods
              </button>

              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.resetGoods}
              >
                Reset goods
              </button>

              <ul>
                {goods.map(good => (
                  <li key={good}>{good}</li>
                ))}
              </ul>
            </>
          )
        }
      </div>
    );
  }
}
