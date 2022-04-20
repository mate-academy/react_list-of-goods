import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
  newList: string[],
  click: boolean,
  isReversed: boolean,
  sortBy: string,
};

export class App extends React.Component<{}, State> {
  state = {
    newList: goodsFromServer,
    click: false,
    isReversed: false,
    sortBy: '',
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const {
      newList,
      click,
      isReversed,
      sortBy,
    } = this.state;

    const copy = [...newList];

    copy.sort((prev, next) => {
      switch (sortBy) {
        case 'name':
          return prev.localeCompare(next);

        case 'length':
          return prev.length - next.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      copy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
        {!click && (
          <button
            type="button"
            onClick={() => {
              this.setState({ click: true });
            }}
          >
            Start
          </button>
        )}
        <button type="button" onClick={this.reverse}>
          Reverse
        </button>
        <button type="button" onClick={this.sortByName}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>
        {click && <GoodsList goods={copy} />}
      </div>
    );
  }
}

export default App;
