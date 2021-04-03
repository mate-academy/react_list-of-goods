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
    hidden: false,
    count: 10,
    goodValue: 0,
  };

  handleChange = (value) => {
    this.setState({
      goods: [...goodsFromServer].filter(good => good.length >= value),
    });
    this.setState(state => ({
      count: state.goods.length,
      goodValue: value,
    }));
  };

  handleSort = (value) => {
    switch (value) {
      case 'asc':
        this.setState(state => ({
          goods: [...state.goods].sort(),
        }));
        break;
      case 'reverse':
        this.setState(state => ({
          goods: [...state.goods].reverse(),
        }));
        break;
      case 'length':
        this.setState(state => ({
          goods: [...state.goods]
            .sort((good1, good2) => good1.length - good2.length),
        }));
        break;
      default:
        break;
    }
  }

  handleReset = () => {
    this.setState({
      goods: goodsFromServer,
      count: goodsFromServer.length,
      goodValue: 1,
    });
  };

  render() {
    const { goods, hidden, count, goodValue } = this.state;

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
              {[...Array(10).keys()].map(el => (
                <option key={el}>{el + 1}</option>
              ))}
            </select>
          </div>
          <div className="GoodsList">
            <ul>
              {goods.map(good => <li key={good}>{good}</li>)}
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
