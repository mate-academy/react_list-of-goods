import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
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
    listVisibility: false,
  }

  showList = () => {
    this.setState({ listVisibility: true });
  }

  render() {
    const { listVisibility } = this.state;

    return (
      <div className="app">
        {!listVisibility && (
          <button
            className="button-start"
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {listVisibility && (
          <GoodsList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
