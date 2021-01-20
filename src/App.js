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

class App extends React.Component {
  state = {
    appStarted: false,
    goods: goodsFromServer,
    isReversed: false,
    sortedBy: 'index',
  }

  start = () => {
    this.setState({ appStarted: true });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({
      sortedBy: 'alphabet',
      isReversed: false,
    });
  }

  sortByInitialOrder = () => {
    this.setState({
      sortedBy: 'index',
      isReversed: false,
    });
  }

  sortByLength = () => {
    this.setState({
      sortedBy: 'length',
      isReversed: false,
    });
  }

  render() {
    const { appStarted, goods, isReversed, sortedBy } = this.state;
    let goodsForRender = [...goods];

    switch (sortedBy) {
      case 'alphabet':
        goodsForRender.sort((a, b) => a.localeCompare(b));
        break;
      case 'length':
        goodsForRender.sort((a, b) => b.length - a.length);
        break;
      default:
        goodsForRender = [...goods];
    }

    if (isReversed) {
      goodsForRender.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!appStarted
          ? (
            <button
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )
          : (
            <>
              <ul>
                {goodsForRender.map(good => <li key={good}>{good}</li>)}
              </ul>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortByInitialOrder}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </>
          )}
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
