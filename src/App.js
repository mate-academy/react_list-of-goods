import React from 'react';
import './App.css';
import ButtonsList from './ButtonList';
import GoodList from './GoodsList';

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
    visibleGoods: [...goodsFromServer],
    selectedLength: 1,
  };

  toStart = () => {
    this.setState(prevState => (
      { isStarted: true }));
  };

  toReverse = () => {
    this.setState(prevState => (
      { visibleGoods: [...prevState.visibleGoods].reverse() }));
  };

  toSortAlphabetically = () => {
    this.setState(prevState => (
      { visibleGoods: [...prevState.visibleGoods].sort() }));
  };

  toReset = () => {
    this.setState(prevState => ({
      visibleGoods: [...goodsFromServer],
      selectedLength: 1,
    }));
  };

  toSortByLength = () => {
    this.setState(prevState => ({
      visibleGoods: [...prevState.visibleGoods]
        .sort((a, b) => (a.length - b.length)),
    }));
  };

  toSelectByLength = ({ target: { value } }) => {
    this.setState(prevState => ({
      visibleGoods: [...goodsFromServer]
        .filter(good => (good.length >= value)),
      selectedLength: value,
    }));
  };

  render() {
    const { isStarted, visibleGoods, selectedLength } = this.state;

    return (
      <section className="goods">
        {isStarted || (
          <button
            onClick={this.toStart}
            type="button"
            className="goods__button goods__button--start"
          >
            Start
          </button>
        )}
        {isStarted && (
          <>
            <ButtonsList
              toReverse={this.toReverse}
              toSortAlphabetically={this.toSortAlphabetically}
              toReset={this.toReset}
              toSortByLength={this.toSortByLength}
              toSelectByLength={this.toSelectByLength}
              selectedLength={selectedLength}
            />
            <GoodList visibleGoods={visibleGoods} />
          </>
        )}
      </section>
    );
  }
}

export default App;
