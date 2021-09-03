import React from 'react';
import classNames from 'classnames';
import './App.css';
import GoodsList from './GoodsList';

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
  list: string[]
  sortBy: string
};

class App extends React.Component<{}, State> {
  state = {
    list: [],
    sortBy: '',
  };

  showList = () => {
    this.setState({ list: [...goodsFromServer] });
  };

  reverse = () => {
    this.setState(state => ({
      list: [...state.list.reverse()],
      sortBy: '',
    }));
  };

  sortByAZ = () => {
    this.setState({ sortBy: 'AZ' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ list: [...goodsFromServer], sortBy: '' });
  };

  render() {
    const { list = [''], sortBy } = this.state;
    const sortedGoods = [...list];

    sortedGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'AZ':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    return (
      <div className="App">
        <button
          type="button"
          className={classNames('button', { showing: list.length > 0 })}
          onClick={this.showList}
        >
          Start
        </button>

        <GoodsList list={sortedGoods} />

        <button
          type="button"
          className={classNames('button', { visible: list.length === 0 })}
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className={classNames('button', { visible: list.length === 0 })}
          onClick={this.sortByAZ}
        >
          Sort by A-Z
        </button>

        <button
          type="button"
          className={classNames('button', { visible: list.length === 0 })}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={classNames('button', { visible: list.length === 0 })}
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
