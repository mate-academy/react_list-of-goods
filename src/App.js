import React from 'react';
import GoodsList from './components/GoodsList';
import Button from './components/Button';
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
    goods: goodsFromServer,
    areGoodsShowed: false,
  }

  showList = () => {
    this.setState({
      areGoodsShowed: true,
    });
  }

  sortByName = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  showReverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    const { goods, areGoodsShowed } = this.state;

    return (
      <div className="goods-container">
        <h1>Goods</h1>

        {!areGoodsShowed
          ? (
            <div className="align-center">
              <Button btnTitle="Start" btnAction={this.showList} />
            </div>
          )
          : (
            <>
              <GoodsList list={goods} />
              <div className="filters align-center">
                <Button
                  btnTitle="Reverse"
                  btnAction={this.showReverse}
                />
                <Button
                  btnTitle="Sort alphabetically"
                  btnAction={this.sortByName}
                />
                <Button
                  btnTitle="Sort by length"
                  btnAction={this.sortByLength}
                />
                <Button
                  btnTitle="Reset"
                  btnAction={this.reset}
                />
              </div>
            </>
          )
        }

      </div>
    );
  }
}

export default App;
