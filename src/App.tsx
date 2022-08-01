/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};
export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    sortType: SortType.NONE,
    isReversed: false,
  };

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlph = () => {
    this.setState(({
      sortType: SortType.ALPABET,
    }));
  };

  sortLen = () => {
    this.setState(({
      sortType: SortType.LENGTH,
    }));
  };

  reset = () => {
    this.setState(({
      sortType: SortType.NONE,
      isReversed: false,
    }));
  };

  render() {
    let goods = [...goodsFromServer];
    const { isReversed, sortType } = this.state;

    switch (sortType) {
      case SortType.ALPABET:
        goods = goods.sort((a, b) => a.localeCompare(b));
        break;
      case SortType.LENGTH:
        goods = goods.sort((a, b) => a.length - b.length);
        break;
      case SortType.NONE:
        goods = [...goodsFromServer];
        break;
      default:
        break;
    }

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App column">
        <div className="level">
          {!this.state.isStarted
            && (
              <Button
                text="Start"
                className="button is-light is-primary level-item"
                method={this.start}
              />
            )}

          {this.state.isStarted
            && (
              <Button
                text="Sort alphabetically"
                className="button is-light is-link"
                method={this.sortAlph}
              />
            )}

          {this.state.isStarted
            && (
              <Button
                text="Sort by length"
                className="button is-light is-link"
                method={this.sortLen}
              />
            )}

          {this.state.isStarted
            && (
              <Button
                text="Reverse"
                className="button is-light is-link"
                method={this.reverse}
              />
            )}

          {this.state.isStarted
            && (
              <Button
                text="Reset"
                className="button is-light is-danger"
                method={this.reset}
              />
            )}

        </div>

        {this.state.isStarted
          && (
            <GoodsList
              className="panel Goods"
              goods={goods}
              isStarted={this.state.isStarted}
            />
          )}

      </div>
    );
  }
}
