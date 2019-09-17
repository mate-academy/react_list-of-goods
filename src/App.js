import React from 'react';
import Button from './Components/Button/Button';
import Content from './Components/Content/Content';
import './App.scss';

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
    goods: goodsFromServer,
    currentSelect: 1,
    isVisible: true,
    newGoods: [...goodsFromServer],
  }

  handleReset = () => this.setState(prevState => ({
    goods: [...prevState.newGoods],
    currentSelect: 1,
  }));

  handleReverse = () => this.setState(prevState => ({
    goods: [...prevState.newGoods].reverse(),
  }));

  handleSort = () => this.setState(prevState => ({
    goods: [...prevState.newGoods].sort(),
  }));

  handleSortByLength = () => this.setState(prevState => ({
    goods: [...prevState.newGoods].sort((a, b) => a.length - b.length),
  }));

  handleClick = () => this.setState(prevState => ({
    isVisible: !prevState.isVisible,
  }));

  handleWordLength = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      currentSelect: value,
      goods: [...prevState.newGoods]
        .filter(elem => elem.length >= value),
    }));
  };

  render() {
    const {
      isVisible,
      goods,
      currentSelect,
    } = this.state;
    const {
      handleClick,
      handleReset,
      handleReverse,
      handleSortByLength,
      handleSort,
      handleWordLength,
    } = this;

    return (
      <div className="App">
        <h1 className="title">
          Goods
          {' '}
          {goodsFromServer.length}
        </h1>
        <Button
          onClick={handleClick}
          className={isVisible
            ? 'button'
            : 'button button--invisible'}
          name="Show more"
        />
        {!isVisible && (
          <Content
            handleReset={handleReset}
            handleReverse={handleReverse}
            handleSortByLength={handleSortByLength}
            handleSort={handleSort}
            handleWordLength={handleWordLength}
            goods={goods}
            currentSelect={currentSelect}
          />
        )}
      </div>
    );
  }
}

export default App;
