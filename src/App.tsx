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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      return visibleGoods.sort((a, b) => {
        return a.localeCompare(b);
      });

    case SortType.LENGTH:
      return visibleGoods.sort((a, b) => {
        return a.length - b.length;
      });

    default:
      return visibleGoods;
  }
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleStartBtnClick = () => {
    this.setState({ isStarted: true });
  };

  handleSortBtnClick = (sortType: SortType) => {
    this.setState({ sortType });
  };

  handleReverseBtnClick = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleResetBtnClick = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const goods = getReorderedGoods(
      goodsFromServer,
      sortType,
    );

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App box has-background-light">
        {!isStarted
          ? (
            <button
              type="button"
              className="button is-danger is-large is-size-1"
              onClick={this.handleStartBtnClick}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                className="button is-primary"
                onClick={() => this.handleSortBtnClick(SortType.ALPABET)}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-primary"
                onClick={() => this.handleSortBtnClick(SortType.LENGTH)}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-warning"
                onClick={this.handleReverseBtnClick}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-danger"
                onClick={this.handleResetBtnClick}
              >
                Reset
              </button>

              <ul className="Goods">
                {
                  goods.map(good => (
                    <li key={uuidv4()} className="Goods__item">{good}</li>
                  ))
                }
              </ul>
            </>
          )}
      </div>
    );
  }
}
