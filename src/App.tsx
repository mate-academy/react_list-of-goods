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
  goodsList: string[];
  isListVisible: boolean;
  isReversed: boolean;
  isSortedByAlp: boolean;
  isSortedByLength: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goodsList: goodsFromServer,
    isListVisible: false,
    isReversed: false,
    isSortedByAlp: false,
    isSortedByLength: false,
  };

  showList = () => {
    this.setState({ isListVisible: true });
  };

  sortByAlp = () => {
    this.setState({
      isSortedByAlp: true,
      isSortedByLength: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSortedByAlp: false,
      isSortedByLength: false,
    });
  };

  sortByLength = () => {
    this.setState({
      isSortedByLength: true,
      isSortedByAlp: false,
    });
  };

  render() {
    const {
      goodsList,
      isListVisible,
      isReversed,
      isSortedByAlp,
      isSortedByLength: sortedByLength,
    } = this.state;

    const visibleFriends = [...goodsList];

    if (isSortedByAlp) {
      visibleFriends.sort();
    }

    if (sortedByLength) {
      visibleFriends.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      visibleFriends.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isListVisible && (
          <button type="button" onClick={this.showList}>
            start
          </button>
        )}

        {isListVisible && (
          <>
            <button type="button" onClick={this.reverse}>
              reverse
            </button>

            <button type="button" onClick={this.sortByAlp}>
              sort alphabitecaly
            </button>

            <button type="button" onClick={this.reset}>
              reset
            </button>

            <button type="button" onClick={this.sortByLength}>
              sortByLength
            </button>

            <ul>
              {visibleFriends.map(item => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
