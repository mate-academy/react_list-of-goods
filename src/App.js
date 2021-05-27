import React from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods';

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
    startButton: true,
  };

  startButton() {
    this.setState({ startButton: false });
  }

  render() {
    const { startButton } = this.state;

    return (
      <div className="container">
        {startButton
          ? (
            <button
              type="button"
              className="container__button"
              onClick={() => this.startButton()}
            >
              Push me:)
            </button>
          )
          : (
            <div>
              <ListOfGoods goods={goodsFromServer} />
            </div>
          )}

      </div>
    );
  }
}

export default App;
