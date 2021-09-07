import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Button } from './Button';

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

const possibleLength: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

enum SortType {
  default,
  alphabetically,
  length,
}

type State = {
  showMainBlock: boolean;
  isReversed: boolean;
  sortBy: SortType,
  minLength: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    showMainBlock: false,
    isReversed: false,
    sortBy: SortType.default,
    minLength: 1,
  };

  showContent = () => {
    this.setState({
      showMainBlock: true,
    });
  };

  chooseMinLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: +event.target.value,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: SortType.alphabetically,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortType.length,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.default,
      minLength: 1,
    });
  };

  render() {
    const {
      showMainBlock,
      isReversed,
      sortBy,
      minLength,
    } = this.state;
    const visibleGoods = goodsFromServer.filter(item => item.length > minLength);

    visibleGoods.sort(
      (firstGood, secondGood) => {
        switch (sortBy) {
          case SortType.alphabetically:
            return firstGood.localeCompare(secondGood);
          case SortType.length:
            return firstGood.length - secondGood.length;
          default:
            return 0;
        }
      },
    );

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        { !showMainBlock && <Button name="Start" action={this.showContent} active />}
        { showMainBlock && (
          <div className="main">
            <select
              name="min-length"
              className="form-select"
              aria-label="Default select example"
              value={this.state.minLength}
              onChange={this.chooseMinLength}
            >
              {possibleLength.map(
                item => (
                  <option value={item}>
                    {item}
                  </option>
                ),
              )}
            </select>

            <ul className="main__list">
              {
                visibleGoods.map(item => (
                  <li
                    key={item}
                    className="main__item"
                  >
                    {item}
                  </li>
                ))
              }
            </ul>

            <div className="main__buttons">
              <Button
                name="Reverse"
                action={this.reverse}
                active={isReversed}
              />
              <Button
                name="Sort alphabetically"
                action={this.sortAlphabetically}
                active={sortBy === SortType.alphabetically}
              />
              <Button
                name="Sort by length"
                action={this.sortByLength}
                active={sortBy === SortType.length}
              />
              <Button
                name="Reset"
                action={this.reset}
                active={false}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
