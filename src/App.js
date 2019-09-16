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
  constructor() {
    super();
    this.state = {
      goodsList: [...goodsFromServer],
      isButtonClicked: false,
      currentValue: 1,
    };
  }

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
      goodsList: [...prevState.goodsList]
        .sort((prev, next) => prev.length - next.length),
    }));
  };

  reset = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      isButtonClicked: false,
    });
  };

  lengthSelect = (event) => {
    this.setState({
      currentValue: event.target.value,
      goodsList: [...goodsFromServer]
        .filter(good => good.length === Number(event.target.value)),
    });
  };

  resetLengthGoods = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      currentValue: 1,
    });
  };

  render() {
    return (
      <div className="app-wrapper">
        <h1>
          List of goods:&nbsp;
          {this.state.goodsList.length}
        </h1>

        {!this.state.isButtonClicked && (
          <button
            type="button"
            className="startButton button-hide"
            onClick={this.showListOfGoods}
          >
            Start
          </button>
        )}

        {this.state.isButtonClicked && (
          <>
            <div className="controls">
              <button
                type="button"
                className="reverse"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                type="button"
                className="startButton button-hide"
                onClick={this.alphabeticSortList}
              >
                Alphabet Sort
              </button>

              <button
                type="button"
                className="startButton button-hide"
                onClick={this.lengthSortList}
              >
                Length sort
              </button>

              <button
                type="button"
                className="startButton button-hide"
                onClick={this.resetLengthGoods}
              >
                Reset length of goods
              </button>

              <button
                type="button"
                className="startButton button-hide"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <span className="selectedSort">
              Choose length for sort:
              <select
                onChange={this.lengthSelect}
                name="lengthSelect"
                id="lengthSelect"
                value={this.state.currentValue}
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
              {this.state.goodsList
                .map(good => <Good key={good} good={good} />)}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
