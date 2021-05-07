import React from 'react';
import './App.css';
import { CreateList } from './components/CreateList';

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

class App extends React.Component {
  state = {
    isVisible: true,
    lengthLimit: 1,
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
  }

  isVisible = () => {
    this.setState({
      isVisible: false,
    });
  }

  changeLength = (event) => {
    this.setState(
      { lengthLimit: +event.target.value },
    );
  }

  reset = () => {
    this.setState({
      lengthLimit: 1,
      sortBy: '',
      isReversed: false,
    });
  }

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortBylength = () => {
    this.setState({ sortBy: 'length' });
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabetical' });
  }

  render() {
    const { isVisible, lengthLimit, goods, sortBy, isReversed } = this.state;
    const select = new Array(goodsFromServer.length).fill(1);

    const visibleGoods = goods.filter(good => good.length >= lengthLimit);

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'length':
          return good1[sortBy] - good2[sortBy];

        case 'alphabetical':
          return good1.localeCompare(good2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">

        {isVisible && (
          <div>
            <button
              type="button"
              className="button button__start"
              onClick={this.isVisible}
            >
              Start
            </button>
          </div>
        )}
        {!isVisible && (
          <div>
            <h1>Goods</h1>
            <button
              type="button"
              className="button button__todo"
              onClick={this.sortBylength}
            >
              Sort by length
            </button>
            <button
              type="button"
              className="button button__todo"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="button button__todo"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button button__todo"
              onClick={this.reset}
            >
              Reset
            </button>
            <select
              className="select"
              value={lengthLimit}
              onChange={this.changeLength}
            >
              {select.map((number, index) => (
                <option key={number}>{number + index}</option>
              ))}
            </select>

            <div>
              <ul>
                <CreateList list={visibleGoods} />
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
