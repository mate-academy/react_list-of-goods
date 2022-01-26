import React from 'react';
import './App.css';
import classNames from 'classnames';
import { GoodsList } from './components/GoodsList';

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
  isStarted: boolean;
  isReversed: boolean;
  isDefault: boolean;
  sortMethod: string;
};
export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    isDefault: true,
    sortMethod: '',
  };

  handleStart = () => {
    this.setState({ isStarted: true });
  };

  reverseGoodsList = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
      isDefault: false,
    }));
  };

  sortByLength = () => {
    this.setState(
      {
        sortMethod: 'byLength',
        isDefault: false,
        isReversed: false,
      },
    );
  };

  sortByAlphabet = () => {
    this.setState(
      {
        sortMethod: 'byAlphabet',
        isDefault: false,
        isReversed: false,
      },
    );
  };

  resetGoodsList = () => {
    this.setState(
      {
        isStarted: true,
        isReversed: false,
        sortMethod: '',
        isDefault: true,
      },
    );
  };

  prepareGoods = () => {
    const preparedGoods = [...goodsFromServer];
    const { isReversed, sortMethod, isDefault } = this.state;

    if (isDefault) {
      return preparedGoods;
    }

    if (sortMethod) {
      preparedGoods.sort((good1, good2) => {
        switch (sortMethod) {
          case 'byAlphabet':
            return good1.localeCompare(good2);
          case 'byLength':
            return good1.length - good2.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      return preparedGoods.reverse();
    }

    return preparedGoods;
  };

  render() {
    return (
      <div className="App">
        <div className="one">
          <h1 className="App__title">Goods</h1>
        </div>
        {!this.state.isStarted && (
          <div className="cont">
            <button
              type="button"
              className="button"
              onClick={this.handleStart}
            >
              <div className="blob">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310 350"
                >
                  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />

                </svg>
              </div>
              <div className="line" />
              <div className="text">
                <p>S</p>
                <p>T</p>
                <p>A</p>
                <p>R</p>
                <p>T</p>
                <p>!</p>
              </div>
            </button>
          </div>
        )}
        {this.state.isStarted && (
          <div className="container">
            <GoodsList preparedGoods={this.prepareGoods()} />

            <div className="buttons">
              <button
                className={classNames(
                  'button1 fill',
                  {
                    'button1-selected': this.state.isReversed,
                  },
                )}
                type="button"
                onClick={this.reverseGoodsList}
              >
                Reverse
              </button>

              <button
                className="button1 fill2"
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort By Alphabet
              </button>

              <button
                className="button1 fill3"
                type="button"
                onClick={this.sortByLength}
              >
                Sort By Length
              </button>

              <button
                className="slide"
                type="button"
                onClick={this.resetGoodsList}
              >
                <div>
                  Reset
                </div>
                <i className="icon-arrow-right" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
