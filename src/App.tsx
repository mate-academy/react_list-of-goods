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
  IsVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    IsVisible: true,
    isReversed: false,
    sortBy: '',
  };

  toShowGoods = () => {
    this.setState({ IsVisible: false });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ isReversed: false, sortBy: '' });
  };

  render() {
    const {
      goods,
      isReversed,
      sortBy,
      IsVisible,
    } = this.state;

    const copyGoods = [...goods];

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'length':
          return good1.length - good2.length;
        case 'alphabet':
          return good1.localeCompare(good2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <div className="App box">
        <h1 className='message-header'>Goods</h1>
        {IsVisible && (
          <h3 className='message-body'>Everything starts here. Just push the button</h3>
        )}
        {IsVisible && (
          <button
            className="button button__start"
            type="button"
            onClick={this.toShowGoods}
          >
            Start
          </button>
        )}
        {!IsVisible && (
          <div className='wrapper'>
            <ul className="list">
              {copyGoods.map(good => (
                <li
                  className="list__item"
                  key={good}
                >
                  {good}
                </li>
              ))}
            </ul>
            <button
              className="button"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className="button"
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              className="button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              className="button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
