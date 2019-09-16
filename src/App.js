import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
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
    isStarted: true,
    selectedOption: 1,
  }

  handleStartClick = () => {
    this.setState({
      isStarted: false,
    });
  }

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  handleClickSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  handleClickReset = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectedOption: 1,
    });
  }

  handleClickSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState({
      goods: [...goodsFromServer]
        .filter(elem => elem.length >= value),
      selectedOption: value,
    });
  }

  render() {
    const { goods, isStarted, selectedOption } = this.state;
    const {
      handleClickReverse,
      handleClickSort,
      handleClickReset,
      handleClickSortByLength,
      handleChangeSelect,
    } = this;

    return (
      <div className="container">
        <button
          type="button"
          onClick={this.handleStartClick}
          className={
            isStarted
              ? 'button-start'
              : 'button--inactive'
          }
        >
          Start
        </button>
        {!isStarted && (
          <GoodsList
            goods={goods}
            selectedOption={selectedOption}
            handleClickReverse={handleClickReverse}
            handleClickSort={handleClickSort}
            handleClickReset={handleClickReset}
            handleClickSortByLength={handleClickSortByLength}
            handleChangeSelect={handleChangeSelect}
          />
        )}
      </div>
    );
  }
}

export default App;
