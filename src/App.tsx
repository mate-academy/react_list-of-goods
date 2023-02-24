import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './server/goodsFromServer.json';
import { GoodList } from './components/GoodList';

type State = {
  sortType: string;
  isReversed: boolean;
  isResetActive: boolean;
};

type ReorderOptions = {
  sortType: string;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case 'ALPHABET':
        return g1.localeCompare(g2);

      case 'LENGTH':
        return g1.length - g2.length;

      case 'NONE':
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    sortType: 'NONE',
    isReversed: false,
    isResetActive: false,
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': this.state.sortType !== 'ALPHABET',
            })}
            onClick={() => this.setState({
              sortType: 'ALPHABET',
              isResetActive: true,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success', {
              'is-light': this.state.sortType !== 'LENGTH',
            })}
            onClick={() => this.setState({
              sortType: 'LENGTH',
              isResetActive: true,
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !this.state.isReversed,
            })}
            onClick={() => this.setState((state) => {
              if (state.sortType !== 'NONE') {
                return {
                  isReversed: !state.isReversed,
                  isResetActive: true,
                };
              }

              return {
                isReversed: !state.isReversed,
                isResetActive: !state.isResetActive,
              };
            })}
          >
            Reverse
          </button>

          {this.state.isResetActive
          && (
            <button
              type="button"
              className={classNames('button', 'is-danger', 'is-light')}
              onClick={() => {
                this.setState({
                  isReversed: false,
                  sortType: 'NONE',
                  isResetActive: false,
                });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <GoodList goods={getReorderedGoods(goodsFromServer, this.state)} />
        </ul>
      </div>
    );
  }
}
