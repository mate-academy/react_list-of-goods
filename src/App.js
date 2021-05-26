import React from 'react';
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

export class App extends React.Component {
  state = {
    isVisibleButtonStart: true,
    isReversed: false,
    sortKey: '',
  }

  showList = () => {
    this.setState(state => ({
      isVisibleButtonStart: !state.isVisibleButtonStart,
    }));
  }

  reverseGoodsList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByKey = (key) => {
    this.setState(state => ({
      sortKey: key,
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortKey: '',
    });
  }

  render() {
    const {
      isVisibleButtonStart,
      isReversed,
      sortKey,
    } = this.state;

    const goodsList = [...goodsFromServer];

    if (sortKey) {
      goodsList.sort((goodA, goodB) => {
        switch (sortKey) {
          case 'alphabet':
            return goodA.localeCompare(goodB);

          case 'length':
            return goodA.length - goodB.length;

          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <div className="App">
        <h1>{`Goods ${goodsList.length}`}</h1>

        {isVisibleButtonStart && (

          <button
            type="button"
            onClick={this.showList}
            className="button"
          >
            Start
          </button>
        )}

        <br />

        <button
          type="button"
          onClick={this.reverseGoodsList}
          className={isReversed
            ? 'selected'
            : 'button'}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={() => this.sortByKey('alphabet')}
          className={sortKey === 'alphabet'
            ? 'selected'
            : 'button'}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.reset}
          className="button"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={() => this.sortByKey('length')}
          className={sortKey === 'length'
            ? 'selected'
            : 'button'}
        >
          Sort by length
        </button>

        {!isVisibleButtonStart && (

          <ul>
            {goodsList.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}

          </ul>
        ) }
      </div>
    );
  }
}
