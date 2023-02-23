import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './server/goodsFromServer.json';
import { GoodList } from './components/GoodList';

type State = {
  sortType: string,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: 'NONE',
    isReversed: false,
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = [...goodsFromServer];

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

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button',
                'is-info',
                { 'is-light': this.state.sortType !== 'ALPHABET' },
              )
            }
            onClick={() => this.setState({ sortType: 'ALPHABET' })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button',
                'is-success',
                { 'is-light': this.state.sortType !== 'LENGTH' },
              )
            }
            onClick={() => this.setState({ sortType: 'LENGTH' })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button',
                'is-warning',
                { 'is-light': !this.state.isReversed },
              )
            }
            onClick={() => this.setState((state) => {
              return ({
                isReversed: !state.isReversed,
              });
            })}
          >
            Reverse
          </button>

          <button
            type="button"
            className={classNames(
              'is-danger',
              'is-light',
              {
                button: this.state.isReversed === true
                  || this.state.sortType !== 'NONE',
              },
            )}
            onClick={() => this.setState({
              isReversed: false,
              sortType: 'NONE',
            })}
            hidden
          >
            Reset
          </button>
        </div>

        <ul>
          <GoodList goods={visibleGoods} />
        </ul>
      </div>
    );
  }
}
