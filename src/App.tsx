import React from 'react';
import { GoodsList } from './Components/GoodsList';

import './App.css';

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

interface State {
  goodsList: string[];
  getStart: boolean;
  isReversed: boolean;
  isSortByAlph: boolean;
  isSortByLength: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goodsList: goodsFromServer,
    isReversed: false,
    getStart: false,
    isSortByAlph: false,
    isSortByLength: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState(state => ({
      isSortByAlph: !state.isSortByAlph,
      isSortByLength: false,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      isSortByLength: !state.isSortByLength,
      isSortByAlph: false,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSortByAlph: false,
      isSortByLength: false,
    });
  };

  start = () => {
    this.setState({ getStart: true });
  };

  render() {
    const {
      goodsList, getStart, isReversed, isSortByAlph, isSortByLength,
    } = this.state;

    const showList = [...goodsList];

    if (isSortByAlph) {
      showList.sort((good1, good2) => good1.localeCompare(good2));
    }

    if (isSortByLength) {
      showList.sort((good1, good2) => good1.length - good2.length);
    }

    if (isReversed) {
      showList.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        {!getStart && (
          <button
            type="button"
            className="button-start"
            onClick={this.start}
          >
            Let&apos;s start!
          </button>
        )}

        <div className="content">

          <div className="goods">
            {getStart && (<GoodsList list={showList} />)}
          </div>

          {getStart && (
            <div className="buttons">
              <div className="buttons__group">
                <button
                  type="button"
                  className="button-sort"
                  onClick={this.sortByAlph}
                >
                  Sort by alphabeticall
                </button>

                <button
                  type="button"
                  className="button-sort"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
              </div>

              <div className="buttons__group">
                <button
                  type="button"
                  className="button-reverse"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button-reset"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    );
  }
}
