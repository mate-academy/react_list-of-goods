import React from 'react';
import classNames from 'classnames';
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
  isStart: boolean;
  isVisible: boolean;
  listOfGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    isStart: false,
    isVisible: true,
    listOfGoods: goodsFromServer,
  };

  startButtonHandler = (): void => (
    this.setState({
      isStart: true,
      isVisible: false,
    })
  );

  reversList = () => (
    this.setState(state => (
      {
        listOfGoods: [...state.listOfGoods].reverse(),
      }
    ))
  );

  alfabetSortList = () => (
    this.setState(state => (
      {
        listOfGoods: [...state.listOfGoods].sort((a, b) => (
          a.localeCompare(b)
        )),
      }
    ))
  );

  sortListByLength = () => (
    this.setState(state => (
      {
        listOfGoods: [...state.listOfGoods].sort((a, b) => (
          a.length - b.length
        )),
      }
    ))
  );

  resetList = () => (
    this.setState(
      {
        listOfGoods: goodsFromServer,
      },
    ));

  render() {
    const { isStart, isVisible, listOfGoods } = this.state;

    return (
      <div className="container">
        <button
          type="button"
          className={classNames(
            'btn',
            {
              hidden: isStart,
            },
          )}
          onClick={this.startButtonHandler}
        >
          Start
        </button>
        <ul className={classNames(
          'listOfGoods',
          {
            hidden: isVisible,
          },
        )}
        >
          {listOfGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'btn',
              {
                hidden: isVisible,
              },
            )}
            onClick={this.reversList}
          >
            Reverse
          </button>
          <button
            type="button"
            className={classNames(
              'btn',
              {
                hidden: isVisible,
              },
            )}
            onClick={this.alfabetSortList}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={classNames(
              'btn',
              {
                hidden: isVisible,
              },
            )}
            onClick={this.resetList}
          >
            Reset
          </button>
          <button
            type="button"
            className={classNames(
              'btn',
              {
                hidden: isVisible,
              },
            )}
            onClick={this.sortListByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
