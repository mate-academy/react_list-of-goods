import { Component } from 'react';
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

interface State {
  list: string[];
  goodsList: string[];
  isClicked: boolean;
}

class App extends Component<{}, State> {
  state: State = {
    list: [...goodsFromServer],
    goodsList: [...goodsFromServer],
    isClicked: false,
  };

  displayList = () => {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  };

  reverseHandler = () => (
    this.setState(state => ({
      goodsList: state.goodsList.reverse(),
    }))
  );

  sortByAlpha = () => (
    this.setState(state => ({
      goodsList: state.goodsList.sort((a, b) => a.localeCompare(b)),
    }))
  );

  sortByLength = () => (
    this.setState(state => ({
      goodsList: state.goodsList.sort((a, b) => a.length - b.length),
    }))
  );

  resetHandler = () => (
    this.setState(state => ({
      goodsList: [...state.list],
    }))
  );

  render() {
    const { isClicked, goodsList } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          type="button"
          className={`App__btn ${isClicked && 'App__hiden'}`}
          onClick={this.displayList}
        >
          Start
        </button>
        <button
          type="button"
          className={`App__btn ${!isClicked && 'App__hiden'}`}
          onClick={this.reverseHandler}
        >
          Reverse
        </button>
        <button
          type="button"
          className={`App__btn ${!isClicked && 'App__hiden'}`}
          onClick={this.sortByAlpha}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className={`App__btn ${!isClicked && 'App__hiden'}`}
          onClick={this.resetHandler}
        >
          Reset
        </button>
        <button
          type="button"
          className={`App__btn ${!isClicked && 'App__hiden'}`}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <ul className="App__list">
          {isClicked && goodsList.map(good => (
            <li
              key={good}
              className="App__item"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
