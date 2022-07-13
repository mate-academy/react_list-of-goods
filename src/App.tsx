import { Component } from 'react';
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
  isVisibleList: boolean,
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    isVisibleList: false,
  };

  getStart = () => {
    this.setState(state => ({
      isVisibleList: !state.isVisibleList,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByName = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (good1, good2) => good1.localeCompare(good2),
      ),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (good1, good2) => good1.length - good2.length,
      ),
    }));
  };

  resetChanges = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { goods, isVisibleList } = this.state;

    return (
      <div className="App block">
        <h1
          className="
            App__title
            title
            is-2
          "
        >
          List of Goods
        </h1>

        {!isVisibleList && (
          <button
            className="
              button
              is-success
              is-medium
            "
            type="button"
            onClick={this.getStart}
          >
            Start
          </button>
        )}

        {isVisibleList && (
          <>
            <ul className="list">
              {goods.map(good => (
                <li className="item media" key={good}>
                  <p>{good}</p>
                </li>
              ))}
            </ul>

            <div className="buttons">
              <button
                className="button is-warning"
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                className="button is-link"
                type="button"
                onClick={this.sortByName}
              >
                Sort alphabetically
              </button>

              <button
                className="button is-info"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                className="button is-danger"
                type="button"
                onClick={this.resetChanges}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
