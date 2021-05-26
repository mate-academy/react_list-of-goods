import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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
    displayList: false,
  };

  render() {
    const { displayList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {displayList === false && (
        <button
          type="button"
          onClick={() => {
            this.setState({
              displayList: true,
            });
          }}
        >
          Start
        </button>
        )}
        {displayList && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
