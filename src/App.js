import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    isShowed: false,
  }

  showList = () => {
    this.setState(() => ({
      isShowed: true,
    }));
  }

  render() {
    const { isShowed } = this.state;

    return (
      <div className="App">
        {
          isShowed
            ? (
              <>
                <GoodsList goods={goodsFromServer} />
              </>
            )
            : (
              <button
                type="button"
                className="start-button"
                onClick={this.showList}
              >
                DON`T PRESS!!!
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
