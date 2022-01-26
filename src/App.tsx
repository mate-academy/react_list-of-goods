import React from 'react';
import './App.scss';

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

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isListDisplayed: false,
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAplphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((goodA, goodB) => (
        goodA.localeCompare(goodB)
      )),
    }));
  };

  reset = () => {
    this.setState(({
      goods: [...goodsFromServer],
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((goodA, goodB) => (
        goodA.length - goodB.length
      )),
    }));
  };

  showList = () => {
    this.setState({
      isListDisplayed: true,
    });
  };

  render() {
    const { goods, isListDisplayed } = this.state;

    return (
      <div className="App">
        {!isListDisplayed && (
          <button
            className="button is-primary"
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isListDisplayed && (
          <>
            <ul className="menu-list">
              {goods.map((product) => (
                <li className="box" key={product}>
                  {product}
                </li>
              ))}
            </ul>

            <button
              className="button is-info"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              className="button is-success"
              type="button"
              onClick={this.sortAplphabetically}
            >
              Sort alphabetically
            </button>

            <button
              className="button is-warning"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              className="button is-danger"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}

      </div>
    );
  }
}

export default App;
