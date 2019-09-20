import React from 'react';
import ListOfGoods from './components/ListOfGoods/ListOfGoods';
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
    isLoaded: true,
  }

  handleStart() {
    this.setState({
      isLoaded: false,
    });
  }

  render() {
    const {
      isLoaded,
    } = this.state;

    return (
      <div className="app">
        {
          isLoaded
            ? (
              <button
                className="start-button"
                type="button"
                onClick={() => {
                  this.handleStart();
                }}
              >
                  Start
              </button>
            )
            : <ListOfGoods goods={goodsFromServer} />
        }
      </div>
    );
  }
}

export default App;
