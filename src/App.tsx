import classNames from 'classnames';
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

type State = {
  goods: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: true,
  };

  showList = () => {
    this.setState((state) => {
      return {
        isVisible: !state.isVisible,
      };
    });
  };

  reverseList = () => {
    this.setState((state) => {
      return {
        goods: [...state.goods].reverse(),
      };
    });
  };

  sortAlph = () => {
    this.setState(state => {
      return {
        goods: [...state.goods]
          .sort((a, b) => a.localeCompare(b)),
      };
    });
  };

  sortLength = () => {
    this.setState(state => {
      return {
        goods: [...state.goods]
          .sort((a, b) => a.length - b.length),
      };
    });
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <ul className={
          classNames(
            'List',
            { 'List--visible': isVisible },
          )
        }
        >
          {goods.map((good) => <li key={good}>{good}</li>)}
        </ul>
        <div className="List__buttons">
          <button
            type="submit"
            onClick={this.showList}
            className={!isVisible ? 'button-hidden' : ''}
          >
            Start
          </button>
          <button
            type="submit"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          <button
            type="submit"
            onClick={this.sortAlph}
          >
            Sort by Alpabet
          </button>
          <button
            type="submit"
            onClick={this.sortLength}
          >
            Sort by Length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
