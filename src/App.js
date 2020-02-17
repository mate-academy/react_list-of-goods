import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Button } from './components/Button/Button';

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
    isStart: false,
    goodsList: [],
    selectOfLength: 1,
  }

  startHandler = () => {
    this.setState({
      isStart: true,
      goodsList: [...goodsFromServer],
    });
  };

  reverseHandler = () => {
    this.setState(prevState => ({
      goodsList: [...goodsFromServer].reverse(),
    }));
  };

  sortAbcHandler = () => {
    this.setState(prevState => ({
      goodsList: [...goodsFromServer].sort((a, b) => a.localeCompare(b)),
    }));
  };

  resetHandler = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      selectOfLength: 1,
    });
  };

  sortLengthHandler = () => {
    this.setState(prevState => ({
      goodsList: [...goodsFromServer].sort((a, b) => a.length - b.length),
    }));
  };

  selectHandler = (evt) => {
    this.setState({
      goodsList: [...goodsFromServer]
        .filter(good => good.length >= evt.target.value),
      selectOfLength: evt.target.value,
    });
  };

  render() {
    const { isStart, goodsList, selectOfLength } = this.state;
    const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        {isStart || (
          <button
            type="button"
            className="button-start"
            onClick={this.startHandler}
          >
            Start!
          </button>
        )}
        {isStart && (
          <>
            <div className="buttons">
              <Button clickHandler={this.reverseHandler}>Reverse</Button>
              <Button clickHandler={this.sortAbcHandler}>Sort ABC</Button>
              <Button clickHandler={this.resetHandler}>Reset</Button>
              <Button clickHandler={this.sortLengthHandler}>Sort length</Button>
              <select
                className="button"
                onChange={this.selectHandler}
                value={selectOfLength}
              >
                {selectOptions.map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <GoodsList list={goodsList} />
          </>
        )}
      </div>
    );
  }
}

export default App;
