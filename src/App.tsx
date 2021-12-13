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
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sort = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((prev, cur) => prev.localeCompare(cur)),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((prev, cur) => prev.length - cur.length),
    }));
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        {!isVisible ? (
          <button
            className="App__button App__button--go"
            type="button"
            onClick={this.showList}
          >
            Let&apos;s see
            <br />
            what we have...
          </button>
        ) : (
          <div className="App__container">
            <div className="App__goods">
              <h1 className="App__title">
                Goods
              </h1>
              <ul className="App__list">
                {goods.map((good) => (
                  <li key="{good}" className="App__item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>

            <div className="App__buttons">
              <button
                className="App__button App__button--reverse"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="App__button App__button--sort_a"
                type="button"
                onClick={this.sort}
              >
                Sort alphabetically
              </button>
              <button
                className="App__button App__button--sort_len"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="App__button App__button--reset"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
