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

interface State {
  goods: string[],
  listIsVisible: boolean,
  lastFunction: string,
  inputValue: number,
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    listIsVisible: true,
    lastFunction: '',
    inputValue: 1,
  };

  removeStartButton = () => {
    const button = document.querySelector('.button__start');

    button?.remove();
    this.setState({
      listIsVisible: false,
    });
  };

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
      lastFunction: 'reverse',
    }));
  };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
      lastFunction: 'sortAlpha',
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
      lastFunction: 'sortByLength',
    }));
  };

  resetList = () => {
    this.setState({
      goods: goodsFromServer,
      inputValue: 1,
    });
  };

  repeatLastFunction = (name: string) => {
    switch (name) {
      case 'reverse':
        this.reverseList();
        break;
      case 'sortAlpha':
        this.sortAlphabetically();
        break;
      case 'sortByLength':
        this.sortByLength();
        break;

      default:
        break;
    }
  };

  render() {
    const { goods, listIsVisible } = this.state;

    return (
      <div className="App">
        <h1
          className="main__title"
          hidden={listIsVisible}
        >
          List of Goods
        </h1>

        <button
          className="button__start"
          type="button"
          hidden={!this.state.listIsVisible}
          onClick={() => {
            this.setState({
              listIsVisible: false,
            });
          }}
        >
          START
        </button>

        <div className="main__container">
          <div
            className="list__container"
            hidden={listIsVisible}
          >
            <ul
              className="goods__list"
            >
              {goods.map(item => {
                return (
                  <li
                    key={item}
                    className="list__item"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="button__container"
            hidden={listIsVisible}
          >
            <button
              className="button"
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              className="button"
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              className="button"
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>
            <button
              className="button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <div
              className="word-length__container"
              hidden={listIsVisible}
            >
              <div className="word-length__title">
                min letters:
              </div>
              <input
                className="word-length__input"
                type="number"
                min={1}
                max={10}
                value={this.state.inputValue}
                hidden={listIsVisible}
                onChange={(event) => {
                  this.setState({
                    goods: goodsFromServer.filter(item => item.length >= +event.target.value),
                    inputValue: +event.target.value,
                  });
                  this.repeatLastFunction(this.state.lastFunction);
                }}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
