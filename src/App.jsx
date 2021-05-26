import React from 'react';
import GoodsList from './GoodsList';
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

class App extends React.Component {
  state = {
    isListVisible: false,
  }

  listRender = () => {
    this.setState({ isListVisible: true });
  }

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App">
        {!isListVisible && (
          <button
            type="button"
            onClick={this.listRender}
          >
            Start
          </button>
        )}
        {isListVisible && (
          <GoodsList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
