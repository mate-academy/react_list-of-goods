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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    listVisibility: true,
    isGoodsReversed: false,
    goodsSortBy: 'withoutSort',
    goodLength: 1,
  }

  makeVisible = () => {
    this.setState(
      state => ({ listVisibility: !state.listVisibility }),
    );
  }

  goodsReverse = () => {
    this.setState(
      state => ({ isGoodsReversed: !state.isGoodsReversed }),
    );
  }

  setGoodsSortParam = (param) => {
    this.setState({ goodsSortBy: param });
  }

  resetSortSettings = () => {
    this.setState({
      isGoodsReversed: false,
      goodsSortBy: 'withoutSort',
      goodLength: 1,
    });
  }

  selectHandle = (event) => {
    this.setState({ goodLength: event.target.value });
  }

  render() {
    const goodsCopy = [...this.state.goods].filter(
      good => good.length >= this.state.goodLength,
    );

    if (this.state.isGoodsReversed) {
      goodsCopy.reverse();
    }

    goodsCopy.sort((g1, g2) => {
      switch (this.state.goodsSortBy) {
        case 'length':
          return g1.length - g2.length;
        case 'alphabeth':
          return g1.localeCompare(g2);
        default:
          return 0;
      }
    });

    return (
      <div className="App">
        <h1>Goods</h1>
        Goods length:
        {' '}
        {goodsFromServer.length}
        <br />
        <button type="button" onClick={this.makeVisible}>
          {
            this.state.listVisibility ? (
              'Hide list'
            ) : (
              'Show list'
            )
          }
        </button>

        <button type="button" onClick={this.goodsReverse}>
          Reverse
        </button>

        <button
          type="button"
          onClick={() => (this.setGoodsSortParam('alphabeth'))}
        >
          Sort alphabetically
        </button>

        <button type="button" onClick={this.resetSortSettings}>
          Reset
        </button>

        <button
          type="button"
          onClick={() => (this.setGoodsSortParam('length'))}
        >
          Sort by length
        </button>

        <select
          name="goodLength"
          id="goodLength"
          value={this.state.goodLength}
          onChange={this.selectHandle}
        >
          {Array(10).fill('').map((element, key) => (
            <option value={key + 1}>{key + 1}</option>
          ))}
        </select>

        {
          this.state.listVisibility && (
            <ul className="GoodsList">
              {goodsCopy.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
          )
        }
      </div>
    );
  }
}

export default App;
