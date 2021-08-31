import React from 'react';
import RenderList from './RenderList';
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
      list: state.list.reverse(),
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

    list.sort((g1, g2) => {
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
          className="button"
          onClick={this.showList}
          style={{ display: (list.length > 0) ? 'none' : 'visible' }}
        >
          Start
        </button>

        <RenderList list={this.state.list} />

        <button
          type="button"
          className="button"
          onClick={this.reverse}
          style={{ visibility: (list.length > 0) ? 'visible' : 'hidden' }}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button"
          onClick={this.sortByAZ}
          style={{ visibility: (list.length > 0) ? 'visible' : 'hidden' }}
        >
          Sort by A-Z
        </button>

        <button
          type="button"
          className="button"
          onClick={this.sortByLength}
          style={{ visibility: (list.length > 0) ? 'visible' : 'hidden' }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button"
          onClick={this.reset}
          style={{ visibility: (list.length > 0) ? 'visible' : 'hidden' }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
