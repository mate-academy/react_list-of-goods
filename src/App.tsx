import React from 'react';
import classNames from 'classnames';
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

type State = {
  visible: boolean,
  goods: string[],
  sortBy: string,
  isReverse: boolean,
  selectedValue: number,
};

class App extends React.Component<{}, State> {
  state = {
    visible: false,
    goods: [],
    sortBy: '',
    isReverse: false,
    selectedValue: 1,
  };

  getVisibleGoods = (
    inputGoods: string[],
    sortBy: string,
    isReverse: boolean,
    selectedValue: number,
  ) => {
    const outputGoods: string[] = [...inputGoods].filter(value => value.length >= selectedValue);

    switch (sortBy) {
      case 'order':
        outputGoods.sort();
        break;
      case 'length':
        outputGoods.sort((a, b) => a.length - b.length);
        break;
      default:
        break;
    }

    if (isReverse) {
      outputGoods.reverse();
    }

    return outputGoods;
  };

  start = () => {
    this.setState({
      visible: true,
      goods: goodsFromServer,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      isReverse: !state.isReverse,
    }));
  };

  sort = () => {
    this.setState({
      sortBy: 'order',
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReverse: false,
      selectedValue: 1,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedValue: +event.target.value,
    });
  };

  render() {
    const {
      visible,
      goods,
      sortBy,
      isReverse,
      selectedValue,
    } = this.state;
    const visibleGoods: string[] = this.getVisibleGoods(goods, sortBy, isReverse, selectedValue);

    return (
      <div className="App">
        <h1>Goods</h1>
        {!visible
          && (
            <button
              type="button"
              className="App__button"
              onClick={this.start}
            >
              Start
            </button>
          )}
        {visible && (
          <>
            <ul className="App__list">
              {visibleGoods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={classNames('App__button', { App__active: isReverse })}
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              className={classNames('App__button', { App__active: sortBy === 'order' })}
              onClick={this.sort}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="App__button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              className={classNames('App__button', { App__active: sortBy === 'length' })}
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <select
              onChange={this.change}
              className="App__button"
              value={selectedValue}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </>
        )}
      </div>
    );
  }
}

export default App;
