import React from 'react';
import './App.css';

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
  start: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
    start: true,
  };

  reverseGoods = (goods: string[]) => {
    return goods.reverse();
  };

  render() {
    const { goods, isVisible, start } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>
        {start && (
          <button
            type="button"
            onClick={() => {
              this.setState({
                isVisible: true,
                start: false,
                goods: [...goodsFromServer],
              });
            }}
            className="app__start-button"
          >
            Start
          </button>
        )}

        {isVisible && (
          <div className="app__container">
            <div className="app__finish-button">
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    isVisible: false,
                    start: true,
                  });
                }}
                className="button__finish-button"
              >
                Finish
              </button>
            </div>

            <div className="app__content">
              <ul className="app__list">
                {goods.map(good => (
                  <li key={good} className="app__item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>

            <div className="app__buttons">
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    goods: goods.sort((a, b) => a.localeCompare(b)),
                  });
                }}
                className="button__sort-alphabetically-button"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState({
                    goods: goods.sort((a, b) => a.length - b.length),
                  });
                }}
                className="button__sotr-by-length-button"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState({ goods: this.reverseGoods(goods) });
                }}
                className="button__reverse-button"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState({ goods: [...goodsFromServer] });
                }}
                className="button__reset-button"
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
