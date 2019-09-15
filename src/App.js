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

const resetGoods = [...goodsFromServer];

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isHidden: true,
  };

  handleReverse = () => {
    this.setState({
      goods: this.state.goods.reverse(),
    });
  };

  handleSort = () => {
    this.setState({
      goods: this.state.goods.sort(),
    });
  };

  handleSortLength = () => {
    this.setState({
      goods: this.state.goods.sort(
        (a, b) => b.replace(/ /gi, '').length - a.replace(/ /gi, '').length
      ),
    });
  };

  handleReset = () => {
    this.setState({
      goods: [...resetGoods],
    });
  };

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({
      goods: [...resetGoods].filter(elem => elem.length >= value),
    });
  };

  handleClick() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
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
            goods={this.state.goods}
            handleReverse={this.handleReverse}
            handleSort={this.handleSort}
            handleSortLength={this.handleSortLength}
            handleReset={this.handleReset}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default App;
