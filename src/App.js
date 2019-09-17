import React from 'react';
import './App.css';
import Goods from './components/Goods/Goods';

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
    isStarted: false,
    goods: goodsFromServer,
    minLength: 1,
    originGoods: [...goodsFromServer],
  };

  startClick = () => {
    this.setState({
      isStarted: true,
    });
  };

  handleClickReverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  };

  handleClickSort = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(),
    }));
  };

  handleClickSortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(
        (a, b) => b.replace(/ /gi, '').length - a.replace(/ /gi, '').length
      ),
    }));
  };

  handleClickReset = () => {
    this.setState(prevState => ({
      minLength: 1,
      goods: [...prevState.originGoods],
    }));
  };

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      minLength: value,
      goods: [...prevState.originGoods].filter(good => good.length >= value),
    }));
  };

  render() {
    const { goods, minLength, isStarted } = this.state;
    const {
      handleClickReverse,
      handleClickSort,
      handleClickSortByLength,
      handleClickReset,
      handleChange,
      startClick,
    } = this;

    return (
      <div className="app">
        <button
          type="button"
          onClick={startClick}
          className={isStarted ? 'isStarted-button' : 'positive ui button'}
        >
          Press to START!
        </button>
        {isStarted && (
          <Goods
            goods={goods}
            minLength={minLength}
            handleClickReverse={handleClickReverse}
            handleClickSort={handleClickSort}
            handleClickSortByLength={handleClickSortByLength}
            handleClickReset={handleClickReset}
            handleChangeSelect={handleChange}
          />
        )}
      </div>
    );
  }
}
export default App;
