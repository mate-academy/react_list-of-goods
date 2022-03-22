import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
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

type State = {
  goods: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
  };

  showList = () => {
    this.setState({ isVisible: true });
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => prev.localeCompare(next)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => (prev.length - next.length)),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  onSelectChanger = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      goods: goodsFromServer.filter(good => (good.length >= Number(event.target.value))),
    });
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        <div className="App__content">
          <h1 className="App__title">List of Goods</h1>
          {!isVisible && (
            <button
              type="button"
              className="App__button"
              onClick={this.showList}
            >
              Start
            </button>
          )}

          {isVisible && (
            <>
              <div className="App__buttons">
                <button
                  type="button"
                  onClick={this.reverseList}
                  className="App__button"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                  className="App__button"
                >
                  By alphabet
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="App__button"
                >
                  By length
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="App__button"
                >
                  Reset
                </button>
              </div>

              <div className="App__select">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="App__select-label" htmlFor="goods">Good name length:</label>
                {' '}
                <select className="App__select-list" name="goods" id="goods" onChange={this.onSelectChanger}>
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

              <GoodsList goods={goods} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
