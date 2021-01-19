import React from 'react';
import './App.scss';
import './components/GoodsList/GoodsList.scss';
import './components/Button/Button.scss';
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

class App extends React.PureComponent {
  state = {
    goods: [...goodsFromServer],
    loading: false,
    sortAlphabet: false,
    sortLength: true,
    select: 1,
    selectedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }

  startLoading = () => {
    this.setState({
      loading: true,
    });
  }

  handleReverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  handleAlphabetSort = () => {
    const { sortAlphabet } = this.state;

    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => (sortAlphabet
          ? a.localeCompare(b)
          : b.localeCompare(a))),
      sortAlphabet: false,
    }));
  }

  handleReset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
      select: 1,
    }));
  }

  handleLengthSort = () => {
    const { sortLength } = this.state;

    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => (sortLength
          ? a.length - b.length
          : b.length - a.length)),
      sortLength: false,
    }));
  }

  render() {
    const { loading, goods, select, selectedValues } = this.state;
    const preparedGoods = goods.filter(good => good.length >= select);

    return (
      <div className="App">
        {!loading ? (
          <button
            type="button"
            onClick={this.startLoading}
            className="button button--start"
          >
            Start
          </button>
        ) : (
          <>
            <h1>Goods</h1>
            <div className="buttons">
              <Button
                handler={this.handleReverse}
                textContent="Reverse"
                className="button"
              />
              <Button
                handler={this.handleAlphabetSort}
                textContent="Sort alphabetically"
                className="button"
              />
              <Button
                handler={this.handleLengthSort}
                textContent="Sort by length"
                className="button"
              />
              <Button
                handler={this.handleReset}
                textContent="Reset"
                className="button"
              />
              <select
                value={select}
                onChange={(event) => {
                  this.setState({ select: +event.target.value });
                }}
              >
                {selectedValues.map(value => (
                  <option
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <GoodsList goods={preparedGoods} />
          </>
        )
        }
      </div>
    );
  }
}

export default App;
