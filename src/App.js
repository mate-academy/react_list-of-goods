import React from 'react';
import './App.css';

import Button from './components/Button/Button';
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
    originalGoods: [...goodsFromServer],
    goods: goodsFromServer,
    isHidden: true,
    currentSelect: 1,
  };

  handleReverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  };

  handleSort = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(),
    }));
  };

  handleSortLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(
        (a, b) => b.replace(/ /gi, '').length - a.replace(/ /gi, '').length
      ),
    }));
  };

  handleReset = () => {
    this.setState(prevState => ({
      currentSelect: 1,
      goods: [...prevState.originalGoods],
    }));
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState(prevState => ({
      currentSelect: value,
      goods: [...prevState.originalGoods].filter(elem => elem.length >= value),

    }));
  };

  handleClick = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }));
  };

  render() {
    const { goods, currentSelect } = this.state;
    const {
      handleReverse,
      handleSort,
      handleSortLength,
      handleReset,
      handleChange,
    } = this;

    return (
      <div className="main">
        <h3 className="display-3">Goods</h3>
        <Button
          onClick={() => this.handleClick()}
          className={
            this.state.isHidden
              ? 'btn btn-primary btn-lg'
              : 'btn btn-primary btn-lg hidden'
          }
        >
          Click me!
        </Button>
        {!this.state.isHidden && (
          <Goods
            goods={goods}
            currentSelect={currentSelect}
            handleReverse={handleReverse}
            handleSort={handleSort}
            handleSortLength={handleSortLength}
            handleReset={handleReset}
            handleChange={handleChange}
          />
        )}
      </div>
    );
  }
}

export default App;
