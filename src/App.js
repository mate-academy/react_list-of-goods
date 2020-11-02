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
    goods: goodsFromServer,
    visibleGoods: goodsFromServer,
    hidden: false,
    count: 10,
    goodValue: 0,
  };

  handleChange = (value) => {
    const { goods } = this.state;
    const goodsResult = goods.filter(good => good.length >= value);

    this.setState({
      visibleGoods: goodsResult,
      count: goodsResult.length,
      goodValue: value,
    });
  };

  handleSort = (value) => {
    const { visibleGoods } = this.state;

    switch (value) {
      case 'asc':
        this.setState({
          visibleGoods: [...visibleGoods].sort(),
        });
        break;
      case 'reverse':
        this.setState({
          visibleGoods: [...visibleGoods].reverse(),
        });
        break;
      case 'length':
        this.setState({
          visibleGoods: [...visibleGoods]
            .sort((good1, good2) => good1.length - good2.length),
        });
        break;
      default:
        break;
    }
  }

  handleReset = () => {
    const { goods } = this.state;

    this.setState({
      visibleGoods: goods,
      count: goods.length,
      goodValue: 1,
    });
  };

  render() {
    const { hidden, count, goodValue, visibleGoods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className="start"
          hidden={hidden}
          onClick={() => this.setState({ hidden: !hidden })}
        >
          Start
        </button>
        <div className="Goods" hidden={!hidden}>
          <h1>Goods</h1>
          <h2>{`Goods count: ${count}`}</h2>
          <div className="goods">
            <select
              name="goods"
              id="goods"
              value={goodValue}
              onChange={(e => this.handleChange(e.target.value))}
            >
              {Array(10).fill(0).map((_, index) => (
                <option>{index + 1}</option>
              ))}
            </select>
          </div>
          <div className="GoodsList">
            <ul>
              {visibleGoods.map(good => <li key={good}>{good}</li>)}
            </ul>
          </div>
          <button
            type="button"
            className="reverse"
            onClick={() => this.handleSort('reverse')}
          >
            Reverse
          </button>
          <button
            type="button"
            className="asc"
            onClick={() => this.handleSort('asc')}
          >
            ASC
          </button>
          <button
            type="button"
            className="length"
            onClick={() => this.handleSort('length')}
          >
            Length
          </button>
          <button
            type="button"
            className="reset"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
