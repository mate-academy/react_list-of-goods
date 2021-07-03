import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    initialGoods: [],
    goods: [],
    isLoaded: false,
    value: '1',
  }

  componentDidMount() {
    this.setState({ initialGoods: goodsFromServer });
  }

  showGoods = () => {
    this.setState(prevState => ({
      isLoaded: true,
      goods: [...prevState.initialGoods],
    }));
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...prevState.initialGoods],
      value: '1',
    }));
  }

  select = (event) => {
    event.persist();

    this.setState((prevState) => {
      const goods = [...prevState.initialGoods];

      return ({
        value: event.target.value,
        goods: goods
          .filter(good => good.length >= event.target.value),
      });
    });
  };

  render() {
    const { goods, isLoaded, value } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isLoaded
          ? (
            <>
              <GoodsList goods={goods} />
              <button
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <select value={value} onChange={this.select}>
                {[...Array(10).keys()].map((item, index) => (
                  <option key={item + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
