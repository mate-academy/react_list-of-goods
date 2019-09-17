import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
import FiltersList from './components/FiltersList/FiltersList';
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
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    selectedOption: null,
    isHidden: true,
  }

  handleStart = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }));
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickSortABC = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickReset = () => {
    this.setState(prevState => ({
      goods: prevState.originalGoods,
    }));
  }

  handleClickSortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  handleSelectChange = (selectedOption) => {
    this.setState(prevState => ({
      selectedOption,
      goods: [...prevState.originalGoods]
        .filter(item => item.length >= selectedOption.value),
    }));
  }

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.handleStart}
          className={
            this.state.isHidden
              ? 'button-active'
              : 'button-hidden'
          }
        >
          Start
        </button>

        <div
          className={
            this.state.isHidden
              ? 'content-hidden'
              : 'content-show'
          }
        >
          <div className="filters">
            <FiltersList
              reverse={this.handleClickReverse}
              sortABC={this.handleClickSortABC}
              reset={this.handleClickReset}
              sortLength={this.handleClickSortLength}
              selectLength={this.handleSelectChange}
              selectedOption={this.state.selectedOption}
            />
          </div>

          <div className="goods">
            {this.state.goods
              .map(good => (
                <GoodsList
                  key={good}
                  good={good}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
