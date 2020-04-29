import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    isButtonClicked: false,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.isButtonClicked
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              onClick={() => (
                this.setState({ isButtonClicked: true })
              )}
              type="button"
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
