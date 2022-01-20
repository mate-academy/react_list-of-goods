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
  initialList: string[],
  goods: string[],
  listIsVisible: boolean,
  inputValue: number,
}

class App extends React.Component<{}, State> {
  state = {
    initialList: [...goodsFromServer],
    goods: goodsFromServer,
    listIsVisible: true,
    inputValue: 1,
  };

  getGoodsToRender = () => {
    const { goods, inputValue } = this.state;

    return goods.filter(item => item.length >= inputValue);
  };

  reverseList = () => {
    this.setState({
      goods: goodsFromServer.reverse(),
    });
  };

  sortAlphabetically = () => {
    this.setState({
      goods: goodsFromServer.sort((a, b) => a.localeCompare(b)),
    });
  };

  sortByLength = () => {
    this.setState({
      goods: goodsFromServer.sort((a, b) => a.length - b.length),
    });
  };

  resetList = () => {
    this.setState(prevState => ({
      goods: prevState.initialList,
      inputValue: 1,
    }));
  };

  render() {
    const goodsToRender: string[] = this.getGoodsToRender();
    const { listIsVisible } = this.state;

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
              {goodsToRender.map(item => {
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
