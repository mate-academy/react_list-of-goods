/* eslint-disable @typescript-eslint/no-unused-vars */
import 'bulma/css/bulma.min.css';
import React from 'react';
import { Button } from 'react-bulma-components';

import './App.scss';
import { goodsFromServer } from './data/goodsFromServer';

enum SortType {
  NONE = 'NONE',
  ALPABET = 'ALPABET',
  LENGTH = 'LENGTH',
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

function getReorderedGoods(
  goods: string[],
  isReversed: boolean,
  sortType: SortType,
) {
  let visibleGoods = [...goods];

  if (sortType === SortType.ALPABET) {
    visibleGoods.sort((a, b) => {
      return a.localeCompare(b);
    });
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => (a.length - b.length));
  }

  if (isReversed === true) {
    visibleGoods = visibleGoods.reverse();
  }

  return (
    visibleGoods.map(good => (
      <li className="Goods__item level-item">{good}</li>
    ))
  );
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    return (
      <div className="app">
        {isStarted
          ? (
            <>
              <h1 className="app__title">Goods</h1>

              <div className="buttons">
                <Button
                  color="info"
                  type="button"
                  onClick={() => {
                    this.setState((state) => ({
                      isReversed: !state.isReversed,
                    }));
                  }}
                  className="button"
                >
                  Reverse
                </Button>

                <button
                  type="button"
                  onClick={() => {
                    this.setState({ sortType: SortType.ALPABET });
                  }}
                  className="button"
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={() => {
                    this.setState({ sortType: SortType.LENGTH });
                  }}
                  className="button"
                >
                  Sort by length
                </button>

                <Button
                  className="button"
                  color="danger"
                  type="button"
                  onClick={() => {
                    this.setState({
                      isReversed: false, sortType: SortType.NONE,
                    });
                  }}
                >
                  Reset
                </Button>
              </div>

              <ul className="app__list">
                {getReorderedGoods(goodsFromServer, isReversed, sortType)}
              </ul>

            </>
          )
          : (
            <Button
              color="primary"
              type="button"
              onClick={() => {
                this.setState({ isStarted: true });
              }}
              className="buttons__start"
            >
              Start
            </Button>
          )}
      </div>
    );
  }
}
