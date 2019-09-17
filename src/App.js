import React from 'react';
import './App.css';
import Good from './components/Good';

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
    originalGoodsList: [...goodsFromServer],
    goodsList: [...goodsFromServer],
    isButtonClicked: false,
    currentValue: 1,
  };

  showListOfGoods = () => {
    this.setState({
      isButtonClicked: true,
    });
  };

  reverseList = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].reverse(),
    }));
  };

  alphabeticSortList = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].sort(),
    }));
  };

  lengthSortList = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.originalGoodsList]
        .sort((prev, next) => prev.length - next.length),
    }));
  };

  lengthSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      currentValue: value,
      goodsList: [...prevState.originalGoodsList]
        .filter(good => good.length === Number(value)),
    }));
  };

  reset = () => {
    this.setState(prevState => ({
      isButtonClicked: false,
      goodsList: [...prevState.originalGoodsList],
      currentValue: 1,
    }));
  }

  resetLengthGoods = () => {
    this.setState(prevState => ({
      currentValue: 1,
      goodsList: [...prevState.originalGoodsList],
    }));
  };

  render() {
    const { goodsList, isButtonClicked, currentValue } = this.state;

    return (
      <div className="app-wrapper">
        <h1>
          List of goods:&nbsp;
          {goodsList.length}
        </h1>

        {!isButtonClicked && (
          <button
            type="button"
            className="app__button"
            onClick={this.showListOfGoods}
          >
            Start
          </button>
        )}

        {isButtonClicked && (
          <>
            <div className="controls">
              <button
                type="button"
                className="app__button"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                type="button"
                className="app__button"
                onClick={this.alphabeticSortList}
              >
                Alphabet Sort
              </button>

              <button
                type="button"
                className="app__button"
                onClick={this.lengthSortList}
              >
                Length sort
              </button>

              <button
                type="button"
                className="app__button"
                onClick={this.resetLengthGoods}
              >
                Reset length of goods
              </button>

              <button
                type="button"
                className="app__button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <span className="selected-sort">
              Choose length for sort:
              <select
                onChange={this.lengthSelect}
                name="lengthSelect"
                id="lengthSelect"
                className="app__select"
                value={currentValue}
              >
                <option selected>Choose length of goods</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="9">9</option>
              </select>
            </span>

            <ul className="list-of-goods">
              {goodsList
                .map(good => <Good key={good} good={good} />)}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
