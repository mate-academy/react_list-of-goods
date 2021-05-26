import React from 'react';
import './App.css';
import GoodList from './GoodList';

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

class App extends React.PureComponent {
  state = {
    visibility: false,
  }

  showList = () => {
    this.setState({ visibility: true });
  }

  render() {
    const { visibility } = this.state;

    return (
      <div>
        {!visibility && (
          <button type="button" onClick={this.showList}>
            start
          </button>
        )}
        {visibility && (
          <GoodList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
