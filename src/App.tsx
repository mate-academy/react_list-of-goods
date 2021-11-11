import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

const goodsFromServer: string[] = [
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

interface State{
  goods: string[];
  isVisible: boolean;
  isReversed: boolean;
  sortBy: string;
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: true,
    isReversed: false,
    sortBy: '',
  };

  areNeedtoShow = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => this.setState({
    isReversed: false,
    sortBy: '',
  });

  sotrByLength = () => this.setState({ sortBy: 'Length' });

  sotrByAlphabet = () => this.setState({ sortBy: 'Alphabet' });

  render() {
    const {
      isVisible,
      goods,
      isReversed,
      sortBy,
    } = this.state;

    const isSotrByLength = sortBy === 'Length';
    const isSotrByAlphabet = sortBy === 'Alphabet';

    const updadetGoods = goods.map(good => good);

    updadetGoods.sort((firstGoods, secondGoods) => {
      switch (sortBy) {
        case ('Length'):
          return firstGoods.length - secondGoods.length;
        case ('Alphabet'):
          return firstGoods.localeCompare(secondGoods);
        default:
          return 0;
      }
    });

    if (isReversed) {
      updadetGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isVisible && <button className="button" type="button" onClick={this.areNeedtoShow}>Start</button>}
        {!isVisible
          && (
            <>
              <GoodsList goods={updadetGoods} />
              <button
                className={`button ${isReversed && 'active'}`}
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button className={`button ${isSotrByAlphabet && 'active'}`} type="button" onClick={this.sotrByAlphabet}>Sort alphabetically</button>
              <button className={`button ${isSotrByLength && 'active'}`} type="button" onClick={this.sotrByLength}>Sort by length</button>
              <button className="button" type="button" onClick={this.reset}>Reset</button>
            </>
          )}
      </div>
    );
  }
}

export default App;
