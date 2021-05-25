import React from 'react';
import cn from 'classnames';
import GoodsList from './components/GoodsList';

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
    goods: [],
    sortBy: 'default',
    isReversed: false,
    selectValue: 1,
  }

  firstShowList = () => {
    this.setState(state => ({
      goods: [
        ...state.goods,
        ...goodsFromServer,
      ],
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  resetList = () => {
    this.setState({
      sortBy: 'default',
      isReversed: false,
      selectValue: 1,
    });
  }

  getSelectValue = (event) => {
    this.setState({
      selectValue: event.target.value,
    });
  }

  render() {
    const { goods, sortBy, isReversed, selectValue } = this.state;

    const displayedGoods = goods.filter(
      good => good.length >= selectValue,
    );

    const selectFill = Array(10).fill(1).map((v, i) => v + i);

    displayedGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      displayedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className={cn({ hide: goods.length })}
          type="button"
          onClick={this.firstShowList}
        >
          start
        </button>

        <div className={cn({ hide: !goods.length })}>
          <p>
            Sort by:&nbsp;
            <button
              type="button"
              onClick={this.sortByAlphabet}
            >
              alphabet
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              length
            </button>
          </p>

          <button
            type="button"
            onClick={this.reverse}
          >
            reverse
          </button>

          <select
            value={selectValue}
            onChange={event => this.getSelectValue(event)}
          >
            {selectFill.map(optionValue => (
              <option key={optionValue}>{optionValue}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={this.resetList}
          >
            reset
          </button>
        </div>

        <GoodsList {...displayedGoods} />
      </div>
    );
  }
}

export default App;
