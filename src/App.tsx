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

enum SortType {
  default,
  alphabetically,
  length,
}

type State = {
  showMainBlock: boolean;
  isReversed: boolean;
  sortBy: SortType,
};

class App extends React.Component<{}, State> {
  state: State = {
    showMainBlock: false,
    isReversed: false,
    sortBy: SortType.default,
  };

  showContent = () => {
    this.setState({
      showMainBlock: true,
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
    });
  };

  render() {
    const { showMainBlock, isReversed, sortBy } = this.state;
    const visibleGoods = [...goodsFromServer].sort(
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
                active={sortBy === SortType.default}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
