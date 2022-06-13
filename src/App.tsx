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
  goods: string[];
  isVisible: boolean;
  isReversed: boolean;
  sortBy: 'name' | 'length' | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    sortBy: null,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'name',
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: null,
    });
  };

  render() {
    const goodsList: string[] = [...this.state.goods];

    switch (this.state.sortBy) {
      case 'name':
        goodsList.sort((first, second) => first.localeCompare(second));
        break;
      case 'length':
        goodsList.sort((first, second) => second.length
        - first.length);
        break;
      default:
        break;
    }

    if (this.state.isReversed) {
      goodsList.reverse();
    }

    const isListVisible = this.state.isVisible;

    return (
      <div className="container">
        {!isListVisible && (
          <button
            type="button"
            className="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isListVisible && (
          <div>
            <ul className="container__list">
              {goodsList.map((good) => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <div className="buttonContainer">
              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button"
                onClick={this.sortAlphabetically}
              >
                Sort by name
              </button>

              <button
                type="button"
                className="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button"
                onClick={this.reset}
              >
                Reset
              </button>

            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
