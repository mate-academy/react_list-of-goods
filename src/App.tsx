import React from 'react';
import { GoodsList } from './components/GoodsList';

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

type Props = {};

type State = {
  goodsList: string[];
  isVisible: boolean;
  isReverse: boolean;
  sortBy: string;
  length: number;
};

export class App extends React.Component<Props, State> {
  state = {
    goodsList: goodsFromServer,
    isVisible: false,
    isReverse: false,
    sortBy: '',
    length: 1,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reversList = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabetically = () => {
    this.setState({ sortBy: 'string' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'number' });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
      length: 1,
    });
  };

  lengthChanger = (value: number) => {
    this.setState({ length: value });
  };

  render() {
    const {
      goodsList,
      isVisible,
      isReverse,
      sortBy,
      length,
    } = this.state;

    const visibleGoodsList = goodsList.filter(good => good.length >= length);

    switch (sortBy) {
      case 'string':
        visibleGoodsList.sort((a, b) => a.localeCompare(b));
        break;
      case 'number':
        visibleGoodsList.sort((a, b) => a.length - b.length);
        break;
      default:
        break;
    }

    if (isReverse) {
      visibleGoodsList.reverse();
    }

    return (
      <div className="App">
        {!isVisible
          && (
            <button
              type="button"
              className="button button--start"
              onClick={this.start}
            >
              start
            </button>
          )}
        {isVisible && (
          <div className="goods">
            <div className="goods__control-buttons">
              <button
                type="button"
                className="button goods__button"
                onClick={this.reversList}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button goods__button"
                onClick={this.sortByAlphabetically}
              >
                Alphabetically
              </button>
              <button
                type="button"
                className="button goods__button"
                onClick={this.sortByLength}
              >
                Length
              </button>
              <div className="wrapper goods__input-wrapper">
                <input
                  className="button goods__button button--number"
                  type="number"
                  min="1"
                  max="10"
                  step="1"
                  value={length}
                  onChange={({ target }) => (
                    this.lengthChanger(+target.value)
                  )}
                />
                <span className="wrapper__button wrapper__button--plus">+</span>
                <span className="wrapper__button wrapper__button--minus">-</span>
              </div>
              <button
                type="button"
                className="button goods__button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
            <GoodsList goods={visibleGoodsList} />
          </div>
        )}
      </div>
    );
  }
}
