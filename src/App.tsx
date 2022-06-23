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

interface State {
  visibleGoods: string [];
  goodsIsVisible: boolean;
  isReversed: boolean;
  isSorted: boolean;
  sortedMethod: string;
  minLength: number;
}

class App extends React.Component<{}, State> {
  state = {
    visibleGoods: goodsFromServer,
    goodsIsVisible: false,
    isReversed: false,
    isSorted: false,
    sortedMethod: '',
    minLength: 1,
  };

  showGoods = () => {
    this.setState({
      goodsIsVisible: true,
    });
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetGoods = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
      sortedMethod: '',
      minLength: 1,
    });
  };

  sortByAbc = () => {
    this.setState({
      isSorted: true,
      sortedMethod: 'abc',
    });
  };

  sortByLength = () => {
    this.setState({
      isSorted: true,
      sortedMethod: 'length',
    });
  };

  setLength = (value: string) => {
    this.setState({
      minLength: +value,
    });
  };

  render() {
    const { visibleGoods } = this.state;

    const renderedGoods = visibleGoods.filter(good => (
      good.length >= this.state.minLength
    ));

    if (this.state.isSorted) {
      switch (this.state.sortedMethod) {
        case ('abc'):
          renderedGoods.sort((a: string, b:string) => {
            return a.localeCompare(b);
          });
          break;
        case ('length'):
          renderedGoods.sort((a: string, b:string) => {
            return a.length - b.length;
          });
          break;
        default:
          return 0;
      }
    }

    if (this.state.isReversed) {
      renderedGoods.reverse();
    }

    return (
      <div className="App box container">
        <h1 className="title">Goods</h1>

        {!this.state.goodsIsVisible && (
          <button
            type="button"
            onClick={this.showGoods}
            className="button is-link is-outlined"
          >
            Start
          </button>
        )}

        {this.state.goodsIsVisible && (
          <>
            <ul className="list">
              {renderedGoods.map(good => {
                return (
                  <li key={good}>{good}</li>
                );
              })}
            </ul>

            <select
              value={this.state.minLength}
              className="button"
              onChange={(e) => {
                this.setLength(e.target.value);
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

            <button
              type="button"
              onClick={this.reverseGoods}
              className={`button is-fullwidth
              ${this.state.isReversed === true ? 'active' : ''}`}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAbc}
              className={`button is-fullwidth
              ${this.state.sortedMethod === 'abc' ? 'active' : ''}`}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
              className={`button is-fullwidth
                ${this.state.sortedMethod === 'length' ? 'active' : ''}`}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.resetGoods}
              className="button is-fullwidth is-danger"
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
