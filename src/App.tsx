import { Component } from 'react';
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
  isVisibleList: boolean,
  isReversed: boolean,
  sortBy: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isVisibleList: false,
    isReversed: false,
    sortBy: '',
  };

  getStart = () => {
    this.setState(state => ({
      isVisibleList: !state.isVisibleList,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabetically = () => {
    this.setState({
      sortBy: 'alphabetically',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  resetChanges = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      isVisibleList,
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((good1, good2) => {
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
      visibleGoods.reverse();
    }

    return (
      <div className="App block">
        <h1
          className="
            App__title
            title
            is-2
          "
        >
          List of Goods
        </h1>

        {!isVisibleList && (
          <button
            className="
              button
              is-success
              is-medium
            "
            type="button"
            onClick={this.getStart}
          >
            Start
          </button>
        )}

        {isVisibleList && (
          <>
            <ul className="list">
              {visibleGoods.map(good => (
                <li className="item media" key={good}>
                  <p>{good}</p>
                </li>
              ))}
            </ul>

            <div className="buttons">
              <button
                className="button is-warning"
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                className="button is-link"
                type="button"
                onClick={this.sortByAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                className="button is-info"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                className="button is-danger"
                type="button"
                onClick={this.resetChanges}
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
