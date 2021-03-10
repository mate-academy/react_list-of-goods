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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isStartPressed: false,
    isListShown: false,
    isReversed: false,
    sortBy: '',
    select: 1,
  };

  showList = () => {
    this.setState(state => ({
      isStartPressed: !state.isStartPressed,
      isListShown: !state.isListShown,
    }));
  }

  reverse =() => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  reset =() => {
    this.setState(state => ({
      sortBy: '',
      select: 1,
    }));
  }

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  change = (e) => {
    this.setState({ select: e.nativeEvent.target.value });
  }

  render() {
    const {
      goods,
      isStartPressed,
      isListShown,
      isReversed,
      select,
      sortBy,
    } = this.state;
    const visibleGoods = [...goods].filter(good => good.length >= select);

    visibleGoods.sort((prevGood, currentGood) => {
      switch (sortBy) {
        case 'name':
          return prevGood.localeCompare(currentGood);

        case 'length':
          return prevGood.length - currentGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="goods__header">Goods</h1>
        {!isStartPressed && (
          <button
            className="button button--start"
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}
        {isListShown && (
          <div>
            <ul className="goods__list">
              {visibleGoods.map(good => (
                <li key={good} className="goods__item">
                  {good}
                </li>
              ))}
            </ul>
            <div className="goods__buttons">
              <button
                className="button"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="button"
                type="button"
                onClick={this.sortByName}
              >
                Sort alphabetically
              </button>
              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                className="button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <select
                className="button"
                onChange={e => this.change(e)}
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
            </div>
          </div>
        )}

      </div>
    );
  }
}

export default App;
