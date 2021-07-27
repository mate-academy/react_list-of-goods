import React from 'react';
import { GoodsList } from './components/GoodsList';
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

export class App extends React.PureComponent {
  state = {
    isStarted: false,
    goods: goodsFromServer,
    lengthLimit: 1,
    isReversed: false,
    sortBy: '',
  }

  startApp = () => {
    this.setState({
      isStarted: true,
    });
  }

  reverseList = () => {
    this.setState({
      isReversed: true,
    });
  }

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'name',
    });
  }

  reset = () => {
    this.setState({
      lengthLimit: 1,
      isReversed: false,
      sortBy: '',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  handleChange = (event) => {
    this.setState({
      lengthLimit: event.target.value,
    });
  }

  render() {
    const { isStarted, goods, lengthLimit, sortBy, isReversed } = this.state;

    const visibleGoods = goods.filter(good => good.length >= lengthLimit);

    visibleGoods.sort((currentGood, nextGood) => {
      switch (sortBy) {
        case 'name':
          return currentGood.localeCompare(nextGood);

        case 'length':
          return currentGood[sortBy] - nextGood[sortBy];

        default:
          return 0;
      }
    });

    if (isReversed === true) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {isStarted === false
          ? (
            <button
              type="button"
              onClick={this.startApp}
            >
              Start
            </button>
          )
          : (
            <>
              <GoodsList goods={visibleGoods} />
              <button
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <select
                value={lengthLimit}
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </>
          )
          }
      </div>
    );
  }
}
