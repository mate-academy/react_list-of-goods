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

interface State {
  goods: string[],
  isStarted: boolean,
  isReversed: boolean,
  sortBy: string,
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    sortBy: '',
  };

  started = () => {
    this.setState((prevState) => ({
      isStarted: !prevState.isStarted,
    }));
  };

  reverseGoods = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  setSortByAlphabetically = () => {
    if (this.state.sortBy === 'alphabetically') {
      this.setState({ sortBy: '' });
    } else {
      this.setState({ sortBy: 'alphabetically' });
    }
  };

  setSortByLength = () => {
    if (this.state.sortBy === 'length') {
      this.setState({ sortBy: '' });
    } else {
      this.setState({ sortBy: 'length' });
    }
  };

  defaultGoodsList = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      isStarted, goods, isReversed, sortBy,
    } = this.state;
    const copyGoods = [...goods];

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabetically':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {
          isStarted && (
            <>
              <ul className="App__list">
                {copyGoods.map(good => {
                  return (
                    <li key={good} className="App__item">
                      {good}
                    </li>
                  );
                })}
              </ul>

              <div className="App__wrap-btns">
                <button
                  type="button"
                  className="App__btn"
                  onClick={this.reverseGoods}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className={sortBy === 'alphabetically'
                    ? 'App__btn active'
                    : 'App__btn'}
                  onClick={this.setSortByAlphabetically}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className={sortBy === 'length'
                    ? 'App__btn active'
                    : 'App__btn'}
                  onClick={this.setSortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="App__btn App__btn--color--red"
                  onClick={this.defaultGoodsList}
                >
                  Reset
                </button>
              </div>
            </>
          )
        }
        {!isStarted && (
          <button
            type="button"
            className="App__btn"
            onClick={this.started}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
