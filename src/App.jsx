import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Start } from './components/Start';

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

const selectItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  state = {
    isStartButtonVisible: true,
    goods: goodsFromServer,
    selectedValue: 1,
  }

  showGoodsList = () => {
    this.setState({
      isStartButtonVisible: false,
    });
  }

  reverseGoodsList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    const sortCallback = (a, b) => a.localeCompare(b);

    this.setState(state => ({
      goods: [...state.goods].sort(sortCallback),
    }));
  }

  sortByLength = () => {
    const sortCallback = (a, b) => a.length - b.length;

    this.setState(state => ({
      goods: [...state.goods].sort(sortCallback),
    }));
  }

  resetMethod = () => {
    this.setState({
      goods: goodsFromServer,
      selectedValue: 1,
    });
  }

  filterByLength = (event) => {
    const targetValue = Number(event.target.value);

    this.setState({
      goods: goodsFromServer.filter(good => good.length >= targetValue),
      selectedValue: targetValue,
    });
  }

  render() {
    const { isStartButtonVisible, selectedValue } = this.state;

    return (
      <div className="app">
        {isStartButtonVisible
          ? (<Start showGoodsList={this.showGoodsList} />)
          : (
            <div>
              <GoodsList goods={this.state.goods} />

              <div className="nav">
                <button
                  className="button is-primary is-outlined"
                  type="button"
                  onClick={this.reverseGoodsList}
                >
                  Reverse
                </button>

                <button
                  className="button is-primary is-outlined"
                  type="button"
                  onClick={this.sortAlphabetically}
                >
                  Sort by Alphabet
                </button>

                <button
                  className="button is-primary is-outlined"
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by Length
                </button>

                <button
                  className="button is-primary is-outlined"
                  type="button"
                  onClick={this.resetMethod}
                >
                  Reset
                </button>

                <div className="field">
                  <div className="control">
                    <div className="select is-primary">
                      <select
                        className="select"
                        value={selectedValue}
                        onChange={this.filterByLength}
                      >
                        {selectItems.map(item => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
