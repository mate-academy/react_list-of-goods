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
  sortByName: boolean,
  sortByLength: boolean,
  reverse: boolean,
  goodsLength: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [''],
    initialButtonVisible: true,
    sortByName: false,
    sortByLength: false,
    reverse: false,
    goodsLength: '1',
  };

  letStart = () => {
    this.setState({ goods: [...goodsFromServer] });
    this.setState({ initialButtonVisible: false });
  };

  sortByName = () => {
    this.setState(prevState => ({
      sortByName: !prevState.sortByName,
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      sortByLength: !prevState.sortByLength,
    }));
  };

  reset = () => {
    if (this.state.goods !== goodsFromServer) {
      this.setState({ goods: [...goodsFromServer] });
    }

    this.setState({ goodsLength: '1' });
  };

  reverse = () => {
    this.setState(prevState => ({
      reverse: !prevState.reverse,
    }));
  };

  changeGoodsLength = (value: string) => {
    this.setState({ goodsLength: value });
  };

  render() {
    const {
      goods,
      initialButtonVisible,
      sortByName,
      sortByLength,
      reverse,
      goodsLength,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= +goodsLength);

    if (sortByLength) {
      visibleGoods.sort((a, b) => a.length - b.length);
      this.state.sortByLength = !sortByLength;
    }

    if (sortByName) {
      visibleGoods.sort((a, b) => a.localeCompare(b));
      this.state.sortByName = !sortByName;
    }

    if (reverse) {
      visibleGoods.reverse();
      this.state.reverse = !reverse;
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
              <label
                htmlFor="itemLength"
                className="has-text-centered"
              >
                Word length
              </label>
              <input
                name="itemLength"
                type="number"
                className="has-text-centered input is-primary is-small"
                min="1"
                max="10"
                defaultValue={this.state.goodsLength}
                onChange={({ target }) => {
                  this.changeGoodsLength(target.value);
                }}
              />
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
