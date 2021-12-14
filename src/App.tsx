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

enum ColumnTypes {
  alpha = 'alpha',
  length = 'length',
}

interface State {
  listOrigin: string[];
  listModified: string[]
  isClicked: boolean;
  sortBy: ColumnTypes | '';
  reverse: boolean;
}

class App extends Component<{}, State> {
  state: State = {
    listOrigin: goodsFromServer,
    listModified: goodsFromServer,
    isClicked: false,
    sortBy: '',
    reverse: false,
  };

  displayList = () => {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  };

  reverseHandler = () => (
    this.setState(state => ({
      reverse: !state.reverse,
    }))
  );

  sortHandler = (type: ColumnTypes) => (
    this.setState({
      sortBy: type,
    })
  );

  resetHandler = () => (
    this.setState(state => ({
      listModified: state.listOrigin,
    }))
  );

  render() {
    const {
      isClicked, listModified, reverse, sortBy,
    } = this.state;

    if (reverse) {
      listModified.reverse();
    }

    if (sortBy) {
      listModified.sort((a, b) => {
        switch (sortBy) {
          case ColumnTypes.alpha:
            return a.localeCompare(b);
          case ColumnTypes.length:
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

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
          onClick={() => this.sortHandler(ColumnTypes.alpha)}
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
          onClick={() => this.sortHandler(ColumnTypes.length)}
        >
          Sort by length
        </button>
        <ul className="App__list">
          {isClicked && listModified.map(good => (
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
