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

enum SortBy {
  None,
  Alphabetically,
  Length,
}

type State = {
  goods: string[];
  showContent: boolean;
  isRevesred: boolean;
  sortBy: SortBy;
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    showContent: false,
    isRevesred: false,
    sortBy: SortBy.None,
  };

  showContent = () => {
    this.setState({ showContent: true });
  };

  reverseList = () => {
    this.setState((prevState) => ({
      isRevesred: !prevState.isRevesred,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: SortBy.Alphabetically,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortBy.Length,
    });
  };

  reset = () => {
    this.setState({
      isRevesred: false,
      sortBy: SortBy.None,
    });
  };

  render() {
    const {
      goods,
      showContent,
      isRevesred,
      sortBy,
    } = this.state;

    const goodsCopy = [...goods];

    switch (sortBy) {
      case SortBy.Alphabetically:
        goodsCopy.sort((good1, good2) => good1.localeCompare(good2));
        break;
      case SortBy.Length:
        goodsCopy.sort((good1, good2) => good1.length - good2.length);
        break;
      default:
        break;
    }

    if (isRevesred) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1 className="box title is-italic has-text-weight-light has-background-primary-light">Goods</h1>
        {showContent ? (
          <div className="App_box box has-background-primary-light">
            <div className="App_buttons box">
              <button
                type="button"
                onClick={this.reverseList}
                className="button is-outlined is-primary"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
                className="button is-outlined is-primary"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="button is-outlined is-primary"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="button is-outlined is-danger"
              >
                Reset
              </button>
            </div>

            <ul className="App_list box">
              {goodsCopy.map(good => (
                <li key={good}>{good}</li>
              ))}
            </ul>
          </div>
        ) : (
          <button
            type="button"
            onClick={this.showContent}
            className="button is-primary"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
