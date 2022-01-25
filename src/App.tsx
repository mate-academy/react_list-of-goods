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

  reverseList = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortbyLength = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
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
              { 'list-visible': isListVisible === true },
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
                { 'button-hidden': isListVisible === true },
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
            onClick={this.reverseList}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button button-alphabet"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button button-by-length"
            onClick={this.sortbyLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
