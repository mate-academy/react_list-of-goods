import React from 'react';
import classNames from 'classnames';
import './App.css';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    goodsRaw: [...goodsFromServer],
    goods: [...goodsFromServer],
    listVisible: false,
  }

  showList = () => {
    this.setState({ listVisible: true });
  }

  reverseList = () => {
    this.setState(prevState => ({ goods: prevState.goods.reverse() }));
  }

  sortByAlpha = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(
        (item1, item2) => item1.localeCompare(item2),
      ),
    }));
  }

  resetList = () => {
    this.setState(prevState => ({ goods: prevState.goodsRaw.slice() }));
  }

  sortByLength = () => {
    this.setState(prevState => ({ goods: prevState.goods.sort(
      (item1, item2) => item1.length - item2.length,
    ) }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <div className={classNames(
          'listContainer',
          { visible: this.state.listVisible },
        )}
        >
          <ul className="listContainer__list">
            {
              this.state.goods.map(item => (
                <li key={item} className="list__item">
                  {item}
                </li>
              ))
            }
          </ul>
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
            onClick={this.sortByAlpha}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="button"
            onClick={this.resetList}
          >
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
        <button
          type="button"
          className={classNames(
            'button',
            'startButton',
            { visible: !this.state.listVisible },
          )}
          onClick={this.showList}
        >
          Start
        </button>

      </div>
    );
  }
}
