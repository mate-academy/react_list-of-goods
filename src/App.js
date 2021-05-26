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
    isVisibleGoodsList: false,
    isReversed: false,
    isSorted: false,
    sortKey: '',
    isReseted: false,
  }

  showList = () => {
    this.setState(state => ({
      isVisibleButtonStart: !state.isVisibleButtonStart,
      isVisibleGoodsList: !state.isVisibleGoodsList,
    }));
  }

  reverseGoodsList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByKey = (key) => {
    this.setState(state => ({
      isSorted: !state.isSorted,
      sortKey: key,
    }));
  }

  reset = () => {
    this.setState({
      isReseted: true,
    });
  }

  getVisibleGoodsList = () => {
    const {
      isVisibleGoodsList,
      isReversed,
      isSorted,
      sortKey,
    } = this.state;

    const goodsList = [...goodsFromServer];

    if (isSorted && sortKey) {
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

    if (isVisibleGoodsList && isReversed) {
      goodsList.reverse();
    }

    return goodsList;
  }

  render() {
    const {
      isVisibleGoodsList,
      isVisibleButtonStart,
      isReseted,
      isReversed,
      isSorted,
      sortKey,

    } = this.state;

    const goodsList = isReseted
      ? goodsFromServer
      : this.getVisibleGoodsList();

    this.state.isReseted = false;

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
          className={isSorted && sortKey === 'alphabet'
            ? 'selected'
            : 'button'}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.reset}
          className={isReseted
            ? 'selected'
            : 'button'}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={() => this.sortByKey('length')}
          className={isSorted && sortKey === 'length'
            ? 'selected'
            : 'button'}
        >
          Sort by length
        </button>

        {isVisibleGoodsList && (

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
