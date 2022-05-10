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
  goodsList: string[];
  startButton: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goodsList: [...goodsFromServer],
    startButton: true,
  };

  showGoodsList = () => {
    this.setState({ startButton: false });
  };

  sortListAlphabetically = () => {
    this.setState((state) => ({
      goodsList: [...state.goodsList].sort(
        (a: string, b: string) => a.localeCompare(b),
      ),
    }));
  };

  sortListByLength = () => {
    this.setState((state) => ({
      goodsList: [...state.goodsList].sort(
        (a, b) => (a.length - b.length),
      ),
    }));
  };

  reverseList = () => {
    this.setState((state) => ({ goodsList: [...state.goodsList].reverse() }));
  };

  resetAll = () => {
    this.setState({ goodsList: [...goodsFromServer] });
  };

  render() {
    const { goodsList, startButton } = this.state;

    return (
      <div className="App">
        {startButton ? (
          <button
            type="button"
            onClick={this.showGoodsList}
            className="StartButton"
          >
            START
          </button>
        ) : (
          <div className="AppCore">
            <h1 className="Title">
              GOODS LIST:
            </h1>

            <ul className="GoodsList">
              {goodsList.map(item => (
                <li className="GoodsListItem" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="Buttons">
              <button
                type="button"
                onClick={this.sortListAlphabetically}
                className="Button"
              >
                SORT ALPHABETICALLY
              </button>

              <button
                type="button"
                onClick={this.sortListByLength}
                className="Button"
              >
                SORT BY LENGTH
              </button>

              <button
                type="button"
                onClick={this.reverseList}
                className="Button"
              >
                REVERSE
              </button>

              <button
                type="button"
                onClick={this.resetAll}
                className="Button"
              >
                RESET
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
