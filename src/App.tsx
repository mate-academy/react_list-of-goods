/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    case SortType.NONE:
    default:
      break;
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean;
  isReversed: boolean;
  sortType: SortType;
};

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => this.setState((state) => ({ isReversed: !state.isReversed }));

  sortByAlphabet = () => this.setState({ sortType: SortType.ALPABET });

  sortByLength = () => this.setState({ sortType: SortType.LENGTH });

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted } = this.state;

    const goodList = getReorderedGoods(
      goodsFromServer,
      this.state.sortType,
      this.state.isReversed,
    );

    const formattedGoodList = goodList.map((good) => ({
      name: good,
      id: uuidv4(),
    }));

    const buttons = [
      { value: 'Sort alphabetically', handler: this.sortByAlphabet },
      { value: 'Sort by length', handler: this.sortByLength },
      { value: 'Reverse', handler: this.reverse },
      { value: 'Reset', handler: this.reset },
    ].map((button) => ({
      ...button,
      id: uuidv4(),
    }));

    const buttonListToRender = buttons.map(({ value, handler, id }) => (
      <button
        key={id}
        onClick={handler}
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
      >
        {value}
      </button>
    ));

    return (
      <div className="App font-mono bg-stone-800 h-screen">
        {isStarted ? (
          <div className="container mx-auto p-35 text-center">
            {buttonListToRender}
            <ul className="Goods space-y-35">
              {formattedGoodList.map(({ name, id }) => (
                <li
                  key={id}
                  className="Goods__item hover:underline text-white text-xl"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <button
            onClick={() => this.start()}
            className="relative button inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            type="button"
          >
            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-stone-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-white">
              Start
            </span>
          </button>
        )}
      </div>
    );
  }
}
