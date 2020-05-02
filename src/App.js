import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';

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
    button: true,
  }

  toggleList = () => {
    this.setState(prev => ({
      button: !prev.button,
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.button
          ? (
            <button
              type="button"
              onClick={this.toggleList}
            >
              Start
            </button>
          )
          : (
            <GoodsList listOfGoods={goodsFromServer} />
          )}
      </div>
    );
  }
}

export default App;
