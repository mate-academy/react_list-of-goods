import React from 'react';
import './App.scss';
import GoodsList from './Components/GoodsList';

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

type State = {
  goods: string[],
  initialButtonVisible: boolean,
  sortedByName: boolean,
  sortedByLength: boolean,
  reverse: boolean,
  goodsLength: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [''],
    initialButtonVisible: true,
    sortedByName: false,
    sortedByLength: false,
    reverse: false,
    goodsLength: '1',
  };

  letStart = () => {
    this.setState({ goods: [...goodsFromServer], initialButtonVisible: false });
  };

  sortByName = () => {
    this.setState({ sortedByName: true, sortedByLength: false });
  };

  sortByLength = () => {
    this.setState({ sortedByLength: true, sortedByName: false });
  };

  reset = () => {
    this.setState({
      sortedByLength: false,
      sortedByName: false,
      reverse: false,
      goodsLength: '1',
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      reverse: !prevState.reverse,
    }));
    this.setState({ sortedByLength: false, sortedByName: false });
  };

  changeGoodsLength = (value: string) => {
    this.setState({ goodsLength: value });
  };

  render() {
    const {
      goods,
      initialButtonVisible,
      sortedByName,
      sortedByLength,
      reverse,
      goodsLength,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= +goodsLength);

    if (sortedByLength) {
      visibleGoods.sort((a, b) => (reverse
        ? b.length - a.length
        : a.length - b.length));
    }

    if (sortedByName) {
      visibleGoods.sort((a, b) => (reverse
        ? b.localeCompare(a)
        : a.localeCompare(b)));
    }

    if (reverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!initialButtonVisible && (
          <div className="App__container">
            <h1 className="title has-text-centered">{`You can see ${visibleGoods.length} goods`}</h1>
            <div className="App__flex-box container">
              <GoodsList goodsList={visibleGoods} />
            </div>

            <div className="App__buttons buttons">
              <button
                type="button"
                className="button is-primary is-small"
                onClick={this.sortByName}
              >
                Sort by name
              </button>

              <button
                type="button"
                className="button is-primary is-small"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-primary is-small"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-primary is-small"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <div className="container">
              <select
                name="select"
                value={this.state.goodsLength}
                onChange={({ target }) => {
                  this.changeGoodsLength(target.value);
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
          </div>
        )}

        {initialButtonVisible && (
          <button
            type="button"
            className="button is-primary"
            onClick={this.letStart}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
