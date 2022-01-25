import classNames from 'classnames';
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
  isListVisible: boolean;
  listOfGoods: string[];
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    isListVisible: false,
    listOfGoods: goodsFromServer,
  };

  reverseHandler = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].reverse(),
    }));
  };

  alphabeticalSortHandler = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLengthHandler = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].sort((a, b) => a.length - b.length),
    }));
  };

  resetHandler = () => {
    this.setState({
      listOfGoods: [...goodsFromServer],
    });
  };

  render() {
    const { isListVisible, listOfGoods } = this.state;

    return (
      <div className="App">
        <ul
          className={
            classNames(
              'list',
              { 'list-visible': isListVisible },
            )
          }
        >
          {listOfGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <div className="buttons-block">
          <button
            type="button"
            className={
              classNames(
                'button',
                { 'button-hidden': isListVisible },
              )
            }
            onClick={() => {
              this.setState({
                isListVisible: true,
              });
            }}
          >
            Start
          </button>

          <button
            type="button"
            className="button"
            onClick={this.reverseHandler}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button button-alphabet"
            onClick={this.alphabeticalSortHandler}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button button-by-length"
            onClick={this.sortByLengthHandler}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button"
            onClick={this.resetHandler}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
