
import React from 'react';
import './App.css';
import GoodsList from './Components/GoodList/GoodsList';
import Select from './Components/Select/Select';
import Button from './Components/Button/Button';

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
    isActive: false,
    goods: goodsFromServer,
    isReverse: false,
    sortBy: '',
    minGoodsLength: 1,
  }

  takeChildrenValue = (event) => {
    this.setState({ minGoodsLength: event });
  }

  reverseGoods = () => {
    this.setState(prevState => ({ isReverse: !prevState.isReverse }));
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  sortByABC = () => {
    this.setState({ sortBy: 'ABC' });
  }

  clearGoods = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
      minGoodsLength: 1,
    });
  }

  showGoods = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    const { isActive,
      clearGoods,
      minGoodsLength,
      goods,
      sortBy,
      isReverse } = this.state;

    return (
      <>
        {!isActive
          && (
          <button
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
          )}
        {isActive
          && (
            <>
              <GoodsList
                goods={goods}
                isReverse={isReverse}
                sortBy={sortBy}
                minGoodsLength={minGoodsLength}
              />
              <Button onClick={this.sortByLength} text="Sort by length" />
              <Button onClick={this.sortByABC} text="Sort by Name" />
              <Button onClick={this.clearGoods} text="Clear" />
              <Button onClick={this.reverseGoods} text="Reverse" />
              <Select
                minGoodsLength={minGoodsLength}
                takeChildrenValue={this.takeChildrenValue}
                clearGoods={clearGoods}
              />
            </>
          )}
      </>
    );
  }
}

export default App;
