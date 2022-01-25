import React from 'react';
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

type State = {
  goods: string[],
  isListVisible: boolean,
  maxLength: number,
};

export class App extends React.PureComponent<{}, State> {
  state = {
    goods: goodsFromServer,
    isListVisible: false,
    maxLength: 1,
  };

  showHideListHandler = () => {
    this.setState(state => ({ isListVisible: !state.isListVisible }));
  };

  reverseListHandler = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  };

  sortByAlphabetHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
  };

  resetHandler = () => {
    this.setState({
      goods: goodsFromServer,
      maxLength: 1,
    });
  };

  sortByLengthHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => firstGood.length - secondGood.length),
    }));
  };

  selectLengthHandler = (value: string) => {
    const length: number = +value;

    this.setState({ maxLength: length });
  };

  render() {
    const { goods, isListVisible, maxLength } = this.state;

    const preparedGoods = goods.filter(good => good.length >= maxLength);

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.showHideListHandler}>
          {isListVisible ? 'Hide' : 'Show'}
        </button>
        {isListVisible && (
          <>
            <button type="button" onClick={this.reverseListHandler}>Reverse</button>
            <button type="button" onClick={this.sortByAlphabetHandler}>Sort alphabetically</button>
            <button type="button" onClick={this.resetHandler}>Reset</button>
            <button type="button" onClick={this.sortByLengthHandler}>Sort by length</button>
            <select
              name="select"
              id="select"
              value={this.state.maxLength}
              onChange={(event) => this.selectLengthHandler(event.target.value)}
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
            {preparedGoods.map(good => (
              <li key={good}>{good}</li>
            ))}
          </>
        )}
      </div>
    );
  }
}
