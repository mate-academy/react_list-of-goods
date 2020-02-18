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
    goodsList: goodsFromServer,
    selectOfLength: 1,
  }

  toStart = () => {
    this.setState({
      isStart: true,
      goodsList: [...goodsFromServer],
    });
  };

  toReverse = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].reverse(),
    }));
  };

  toSortAbc = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  };

  toReset = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      selectOfLength: 1,
    });
  };

  toSortLength = () => {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList].sort((a, b) => a.length - b.length),
    }));
  };

  toSelect = (evt) => {
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
        {!isStart
          ? (
            <button
              type="button"
              className="button-start"
              onClick={this.toStart}
            >
            Start!
            </button>
          )
          : (
            <>
              <div className="buttons">
                <Button clickHandler={this.toReverse}>Reverse</Button>
                <Button clickHandler={this.toSortAbc}>Sort ABC</Button>
                <Button clickHandler={this.toReset}>Reset</Button>
                <Button clickHandler={this.toSortLength}>Sort length</Button>
                <select
                  className="button"
                  onChange={this.toSelect}
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
