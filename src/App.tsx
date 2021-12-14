import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
  goods: string[];
  isVisible: boolean;
  minLength: number;
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    isVisible: false,
    minLength: 1,
  };

  showGoodsList = () => {
    this.setState(st => ({
      isVisible: !st.isVisible,
    }));
  };

  sortAlphabetically = () => {
    this.setState(st => ({
      goods: [...st.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  reverse = () => {
    this.setState(st => ({
      goods: [...st.goods].reverse(),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      minLength: 1,
    });
  };

  sortByLength = () => {
    this.setState(st => ({
      goods: [...st.goods].sort((a, b) => a.length - b.length),
    }));
  };

  changeMinLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      minLength: +event.target.value,
    });
  };

  render(): React.ReactNode {
    const { goods, minLength, isVisible } = this.state;
    const listOfGoods = goods.filter(item => item.length >= minLength);

    return (
      <div className="App">
        <div className="App__list">
          <button
            className="App__show-btn"
            type="button"
            onClick={this.showGoodsList}
            hidden={isVisible}
          >
            Show
          </button>
          {isVisible && <GoodsList goods={listOfGoods} />}
        </div>
        <div className="App__control Control">
          <div className="Control__btns">
            <button
              className="Control__btn"
              type="button"
              onClick={this.reverse}
              disabled={!isVisible}
            >
              Reverse
            </button>
            <button
              className="Control__btn"
              type="button"
              onClick={this.sortAlphabetically}
              disabled={!isVisible}
            >
              Sort alphabetically
            </button>
            <button
              className="Control__btn"
              type="button"
              onClick={this.reset}
              disabled={!isVisible}
            >
              Reset
            </button>
            <button
              className="Control__btn"
              type="button"
              onClick={this.sortByLength}
              disabled={!isVisible}
            >
              Sort by length
            </button>
          </div>
          <div className="Control__form">
            <form>
              <label className="Control__label" htmlFor="input">
                {`Mininum length: ${minLength}`}
                <input
                  type="range"
                  id="input"
                  min={1}
                  max={10}
                  step={1}
                  onChange={this.changeMinLength}
                  value={minLength}
                  disabled={!isVisible}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
