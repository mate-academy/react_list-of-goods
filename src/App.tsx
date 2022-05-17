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
  goods: Array<string>;
  showList: boolean;
  lettersLimit: number;
  isReversed: boolean;
  sortBy: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    showList: false,
    lettersLimit: 1,
    isReversed: false,
    sortBy: 'none',
  };

  show = () => {
    this.setState((prevState) => ({
      ...prevState,
      showList: !prevState.showList,
    }));
  };

  reverse = () => {
    this.setState((prevState) => ({
      ...prevState,
      isReversed: !prevState.isReversed,
    }));
  };

  filterByLength = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value;

    this.setState((prevState) => ({
      ...prevState,
      lettersLimit: Number(newValue),
    }));
  };

  sortAlphabetically = () => {
    this.setState((prevState) => ({
      ...prevState,
      sortBy: 'alph',
    }));
  };

  sortByLength = () => {
    this.setState((prevState) => ({
      ...prevState,
      sortBy: 'leng',
    }));
  };

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      sortBy: 'none',
      isReversed: false,
      lettersLimit: 1,
    }));
  };

  render() {
    const {
      goods,
      showList,
      lettersLimit,
      isReversed,
      sortBy,
    } = this.state;

    const listToShow = goods.filter(good => good.length >= lettersLimit);

    switch (sortBy) {
      case 'alph':
        listToShow.sort((g1, g2) => (g1.localeCompare(g2)));
        break;

      case 'leng':
        listToShow.sort((g1, g2) => (g1.length - g2.length));
        break;

      default:
        break;
    }

    if (isReversed) {
      listToShow.reverse();
    }

    return (
      <div className="app">
        {!showList && (
          <button
            className="app__btn"
            type="button"
            onClick={this.show}
          >
            show list
          </button>
        )}

        {showList
        && (
          <>
            <div className="app__list-container">
              <ul className="app__list-goods">
                {listToShow.map(good => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="app__sort-btn-container">
              <button
                className="app__btn"
                type="button"
                onClick={this.reverse}
              >
                reverse
              </button>
              <button
                className="app__btn"
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                className="app__btn"
                type="button"
                onClick={this.reset}
              >
                reset
              </button>
              <button
                className="app__btn"
                type="button"
                onClick={this.sortByLength}
              >
                sort by length
              </button>
              <select
                name="length"
                className="app__lettersCountFilter"
                value={lettersLimit}
                onChange={this.filterByLength}
              >
                {(new Array(10))
                  .fill(null)
                  .map((_, index) => (
                    <option
                      value={index + 1}
                      // eslint-disable-next-line
                      key={index + 1}
                      selected={index + 1 === lettersLimit}
                    >
                      {`${index + 1}+ letters`}
                    </option>
                  ))}
              </select>
            </div>
          </>
        )}
      </div>
    );
  }
}
