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
  visibleListOfGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    isStart: false,
    isVisible: false,
    listOfGoods: [...goodsFromServer],
    visibleListOfGoods: [...goodsFromServer],
  };

  startButtonHandler = (): void => (
    this.setState({
      isStart: true,
      isVisible: true,
    })
  );

  reverseList = () => (
    this.setState((state) => (
      {
        visibleListOfGoods: state.visibleListOfGoods.reverse(),
      }
    ))
  );

  alfabetSortList = () => (
    this.setState(state => (
      {
        visibleListOfGoods: state.visibleListOfGoods.sort((a, b) => (
          a.localeCompare(b)
        )),
        listOfGoods: state.visibleListOfGoods.sort((a, b) => (
          a.localeCompare(b)
        )),
      }
    ))
  );

  sortListByLength = () => (
    this.setState(state => (
      {
        visibleListOfGoods: state.visibleListOfGoods.sort((a, b) => (
          a.length - b.length
        )),
        listOfGoods: state.visibleListOfGoods.sort((a, b) => (
          a.length - b.length
        )),
      }
    ))
  );

  filterLength = (event: any) => {
    this.setState(state => (
      {
        // eslint-disable-next-line max-len
        visibleListOfGoods: [...state.listOfGoods].filter(good => good.length >= event.target.value),
      }
    ));
  };

  resetList = () => {
    this.setState(() => (
      {
        visibleListOfGoods: [...goodsFromServer],
      }
    ));
  };

  render() {
    const { isStart, isVisible, visibleListOfGoods } = this.state;

    return (
      <>
        <button
          type="button"
          className={classNames(
            'button',
            {
              hidden: isStart,
            },
          )}
          onClick={this.startButtonHandler}
        >
          Start
        </button>
        <div className={classNames(
          'content',
          {
            hidden: !isVisible,
          },
        )}
        >
          <div className="buttons">
            <button
              type="button"
              className="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button"
              onClick={this.alfabetSortList}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="button"
              onClick={this.sortListByLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="button"
              onClick={this.resetList}
            >
              Reset
            </button>
            <select onChange={(e) => this.filterLength(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <ul className="listOfGoods">
            {visibleListOfGoods.map(good => (
              <li className="good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
