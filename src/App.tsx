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

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    start: false,
    isReversed: false,
    sortBy: '',
  };

  show = () => {
    this.setState({ start: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alpha',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      start,
      goods,
      sortBy,
      isReversed,
    } = this.state;
    const visibleGoods = [...goods];

    if (sortBy) {
      visibleGoods.sort((a, b) => {
        switch (sortBy) {
          case 'alpha':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className={classNames('App', {
        'App--before': !start,
        'App--after': start,
      })}
      >
        {!start
          ? (
            <button
              type="button"
              onClick={this.show}
              className="button button--start"
            >
              Start
            </button>
          )
          : (
            <>
              <ul className="goods-list">
                {visibleGoods.map(good => (
                  <li key={good} className="goods-list__item">{good}</li>
                ))}
              </ul>
              <div className="buttons">
                <button
                  type="button"
                  onClick={this.reverse}
                  className="button"
                >
                  reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                  className="button"
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="button"
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                  className="button"
                >
                  Reset
                </button>
              </div>
            </>
          )}

      </div>
    );
  }
}

type State = {
  goods: string[]
  start: boolean,
  isReversed: boolean,
  sortBy: string,
};
export default App;
