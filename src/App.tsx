import React from 'react';
import './App.scss';

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

type Props = {};

type State = {
  goods: string[],
  sortGoodsBy: string,
  isReversed: boolean,
  listVisible: boolean,
  goodLenght: number
};

class App extends React.Component<Props, State> {
  state = {
    goods: goodsFromServer,
    sortGoodsBy: '',
    isReversed: false,
    listVisible: false,
    goodLenght: 1,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortGoodsBy: 'Alphabet' });
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortGoodsBy: '',
      goodLenght: 1,
    });
  };

  setLength = (length: string) => {
    this.setState({
      goodLenght: +length,
    });
  };

  sortByLength = () => {
    this.setState({ sortGoodsBy: 'Length' });
  };

  render() {
    const {
      goods, sortGoodsBy, listVisible, goodLenght, isReversed,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= goodLenght);

    visibleGoods.sort((firstGood, secondGood) => {
      switch (sortGoodsBy) {
        case 'Alphabet':
          return firstGood.localeCompare(secondGood);
        case 'Length':
          return firstGood.length - secondGood.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="app">
        <h1>Goods</h1>
        {!listVisible
        && (
          <button
            type="button"
            onClick={() => {
              this.setState({ listVisible: true });
            }}
          >
            Start
          </button>
        )}

        {listVisible && (
          <>
            <button type="button" onClick={this.reverse}>
              Reverse
            </button>
            <button type="button" onClick={this.sortAlphabetically}>
              Sort alphabetically
            </button>
            <button type="button" onClick={this.reset}>
              Reset
            </button>
            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>
            <div className="select">
              Choose length for sorting:
              <select
                value={goodLenght}
                onChange={({ target }) => {
                  this.setLength(target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <ul className="list">
              {visibleGoods.map(good => (
                <li key={good} className="list__item">
                  <span>{good}</span>
                  <span>{`length: ${good.length}`}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
