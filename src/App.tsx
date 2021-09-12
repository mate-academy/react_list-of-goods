/* eslint-disable no-console */
import React from 'react';
import { Button } from './button/Button';
import { Select } from './select/Select';
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

const wordsLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  showGoods: boolean,
  initialGoods: string[],
  changedGoods: string[],
  sortGoodsByLetter: boolean,
  sortGoodsByLength: boolean,
  reset: boolean,
  reverseGoods: boolean,
  maxWordLength: string,
};

export class App extends React.PureComponent<{}, State> {
  state = {
    initialGoods: goodsFromServer,
    changedGoods: goodsFromServer,
    sortGoodsByLetter: true,
    sortGoodsByLength: true,
    showGoods: true,
    reset: true,
    reverseGoods: true,
    maxWordLength: 'Word length',
  };

  sortGoods = (sortType: string) => {
    this.setState((currentState) => {
      switch (sortType) {
        case 'Sort by length':
          return {
            ...currentState,
            sortGoodsByLength: !currentState.sortGoodsByLength,
            reset: true,
            sortGoodsByLetter: true,
            reverseGoods: true,
            changedGoods: [...currentState.changedGoods].sort(
              (a, b) => a.length - b.length,
            ),
          };
        case 'Sort alphabetically':
          return {
            ...currentState,
            sortGoodsByLetter: !currentState.sortGoodsByLetter,
            sortGoodsByLength: true,
            reset: true,
            reverseGoods: true,
            changedGoods: [...currentState.changedGoods].sort(
              (a, b) => a.localeCompare(b),
            ),
          };
        default:
          return {
            ...currentState,
          };
      }
    });
  };

  showGoods = () => {
    this.setState({ showGoods: false });
  };

  reset = () => {
    this.setState((currentState) => {
      return {
        changedGoods: [...currentState.initialGoods],
        reset: !currentState.reset,
        sortGoodsByLetter: true,
        sortGoodsByLength: true,
        reverseGoods: true,
        maxWordLength: 'Word length',
      };
    });
  };

  reverseGoods = () => {
    this.setState((currentState) => {
      return {
        changedGoods: [...currentState.changedGoods].reverse(),
        reverseGoods: !currentState.reverseGoods,
        reset: true,
        sortGoodsByLetter: true,
        sortGoodsByLength: true,
      };
    });
  };

  render = () => {
    const {
      changedGoods,
      sortGoodsByLetter,
      sortGoodsByLength,
      showGoods,
      reset,
      reverseGoods,
      maxWordLength,
    } = this.state;

    let filterGoods = changedGoods;

    if (+maxWordLength >= 0) {
      filterGoods = changedGoods.filter(good => good.length <= +maxWordLength);
    }

    return (
      <div className="App">
        <h1>Goods selector</h1>
        {showGoods || (
          <>
            <ul>
              {filterGoods.map(good => {
                return (
                  <li key={good}>
                    {good}
                  </li>
                );
              })}
            </ul>
            <Button
              buttonType="Reverse"
              callback={this.reverseGoods}
              buttonChoose={reverseGoods}
            />
            <Button
              buttonType="Sort alphabetically"
              callback={() => this.sortGoods('Sort alphabetically')}
              buttonChoose={sortGoodsByLetter}
            />
            <Button
              buttonType="Reset"
              callback={this.reset}
              buttonChoose={reset}
            />
            <Button
              buttonType="Sort by length"
              callback={() => this.sortGoods('Sort by length')}
              buttonChoose={sortGoodsByLength}
            />
            <div className="select is-success">
              <select
                className="is-hovered"
                name="wordLength"
                id=""
                value={maxWordLength}
                onChange={(event) => this.setState({ maxWordLength: event.target.value })}
              >
                <Select wordsLength={wordsLength} />
              </select>
            </div>
          </>
        )}
        {this.state.showGoods && (
          <button
            type="button"
            className="button is-success"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}
      </div>
    );
  };
}
