import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-useless-path-segments
import Button from './components/Button/';
// eslint-disable-next-line import/no-useless-path-segments
import GoodsList from './components/GoodsList/';

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
    goodsList: goodsFromServer,
    isListVisible: false,
  }

  openPage = () => {
    this.setState({ isListVisible: true });
  }

  reverseGoods = () => {
    this.setState(
      state => ({
        goodsList: [...state.goodsList].reverse(),
      }),
    );
  }

  sortByAlphabet = () => {
    this.setState(
      state => ({
        goodsList: [...state.goodsList].sort(
          (prevGood, nextGood) => (prevGood.localeCompare(nextGood)),
        ),
      }),
    );
  }

  resetGoods = () => {
    this.setState({ goodsList: goodsFromServer });
  }

  sortByLength = () => {
    this.setState(
      state => ({
        goodsList: [...state.goodsList].sort(
          (prevGood, nextGood) => (prevGood.length - nextGood.length),
        ),
      }),
    );
  }

  render() {
    const { goodsList, isListVisible } = this.state;

    return (
      <div>
        {isListVisible ? (
          <>
            <GoodsList goodsList={goodsList} />
            <div>
              <Button
                text="Reverse"
                onClick={this.reverseGoods}
              />
              <Button
                text="Sort alphabetically"
                onClick={this.sortByAlphabet}
              />
              <Button
                text="Reset"
                onClick={this.resetGoods}
              />
              <Button
                text="Sort by length"
                onClick={this.sortByLength}
              />
            </div>
          </>
        ) : (
          <Button
            text="Start"
            onClick={this.openPage}
          />
        )}
      </div>
    );
  }
}

export default App;
