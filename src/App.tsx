/* eslint-disable no-console */
import React from 'react';
import { Button } from './button/button';
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

type State = {
  showGoods: boolean,
  initialGoods: string[],
  changedGoods: string[],
  sortGoodsByLetter: boolean,
  sortGoodsByLength: boolean,
  reset: boolean,
  reverseGoods: boolean,
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
  };

  sortGoods = (sortType: string) => {
    this.setState((currentState) => {
      switch (sortType) {
        case 'Sort by length':
          return {
            ...currentState,
            changedGoods: [...currentState.changedGoods].sort(
              (a, b) => a.length - b.length,
            ),
            sortGoodsByLength: !currentState.sortGoodsByLength,
          };
        case 'Sort alphabetically':
          return {
            ...currentState,
            changedGoods: [...currentState.changedGoods].sort(
              (a, b) => a.localeCompare(b),
            ),
            sortGoodsByLetter: !currentState.sortGoodsByLetter,
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
      };
    });
  };

  reverseGoods = () => {
    this.setState((currentState) => {
      return {
        changedGoods: [...currentState.changedGoods].reverse(),
        reverseGoods: !currentState.reverseGoods,
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
    } = this.state;

    return (
      <div className="App">
        <h1>Goods selector</h1>
        {showGoods || (
          <>
            <ul>
              {changedGoods.map(good => {
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
