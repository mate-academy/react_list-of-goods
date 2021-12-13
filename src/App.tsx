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
  isHiddenList: boolean;
  visibleList: string[];
};

class App extends React.Component<{}, State> {
  state = {
    isHiddenList: true,
    visibleList: [...goodsFromServer],
  };

  showGoodsList = () => {
    this.setState({ isHiddenList: false });
  };

  reverseList = () => {
    this.setState(state => ({
      visibleList: state.visibleList.reverse(),
    }));
  };

  sortListAlphabetically = () => {
    this.setState(state => ({
      visibleList: state.visibleList.sort((word1, word2) => (
        word1.localeCompare(word2)
      )),
    }));
  };

  resetList = () => {
    this.setState({ visibleList: [...goodsFromServer] });
  };

  sortListByLength = () => {
    this.setState(state => ({
      visibleList: state.visibleList.sort((word1, word2) => (
        word1.length - word2.length
      )),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {/* {goodsFromServer.length} */}
        {this.state.isHiddenList ? (
          <button
            type="button"
            onClick={this.showGoodsList}
          >
            Start
          </button>
        ) : (
          <>
            <ul>
              {this.state.visibleList.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortListAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortListByLength}
            >
              Sort by length
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
