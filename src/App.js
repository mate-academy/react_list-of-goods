import React from 'react';
import { render } from 'react-dom';
import className from 'classnames';
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

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isHidden: true,
    isReversed: false,
    sortBy: '',
  }

  toggleHidden = () => {
    this.setState(
      state => ({
        isHidden: !state.isHidden,
      })
    );
  }

  reverse = () => {
    this.setState(
      state => ({
        isReversed: !state.isReversed,
      })
    )
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState(
      state => ({
        isReversed: false,
        sortBy: '',
      })
    )
  }

  render() {
    const { goods, isHidden, isReversed, sortBy } = this.state;
    const updatedGoods = [...goods];

    updatedGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      updatedGoods.reverse();
    }

    return (
      <div className="App column is-half">
        <div className="panel">
          <div
            className="
              panel-heading
              is-flex
              is-justify-content-space-between
            "
          >
            <h1 className="title is-4">
              Goods
            </h1>
            <button
              type="button"
              className={
                className('button is-dark', { 'is-hidden': !isHidden })
              }
              onClick={this.toggleHidden}
            >
              Start
            </button>
          </div>
          <div
            className={
              className('panel-body', { 'is-hidden': isHidden })
            }
          >
            <div className="panel-block">
              <button
                type="button"
                className="button is-dark mr-5"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button is-dark mr-5"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="button is-dark mr-5"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="button is-dark mr-5"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
            <ul>
              {
                updatedGoods.map(good => (
                  <li
                    key={good}
                    className="panel-block"
                  >
                    {good}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
