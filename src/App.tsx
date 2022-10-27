import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goodsFromServer = [
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
  goods: string[],
  isReversed: boolean,
  sortBy: string,
  resetVisibility: boolean,
  classVisibility: string,
  isReverseClicked: boolean,
};

type ButtonsMap = {
  ALPHABETICALLY: string,
  BUY_LENGTH: string,
};

const buttonsMap: ButtonsMap = {
  ALPHABETICALLY: 'ALPHABETICALLY',
  BUY_LENGTH: 'BUY_LENGTH',
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
    resetVisibility: false,
    classVisibility: '',
    isReverseClicked: false,
  };

  toShowButton = () => {
    this.setState({ resetVisibility: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      resetVisibility: true,
      isReverseClicked: !state.isReverseClicked,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alpha',
      resetVisibility: true,
      classVisibility: 'ALPHABETICALLY',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      resetVisibility: true,
      classVisibility: 'BUY_LENGTH',
    });
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
      resetVisibility: false,
      classVisibility: '',
      isReverseClicked: false,
    });
  };

  render() {
    const {
      goods,
      isReversed,
      sortBy,
      resetVisibility,
      classVisibility,
      isReverseClicked,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((alph, len) => {
      switch (sortBy) {
        case 'alpha':
          return alph.localeCompare(len);
        case 'length':
          return alph.length - len.length;
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
            onClick={this.sortByAlphabet}
            className={classNames('button', {
              'is-info is-light': classVisibility !== buttonsMap.ALPHABETICALLY,
              'is-info': classVisibility === buttonsMap.ALPHABETICALLY,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-success is-light': classVisibility !== buttonsMap.BUY_LENGTH,
              'is-success': classVisibility === buttonsMap.BUY_LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', {
              'is-warning is-light': !isReverseClicked,
              'is-warning': isReverseClicked,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>
          {resetVisibility && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
