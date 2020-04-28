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
    activeButton: false,
  }

  render() {
    const { activeButton } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {activeButton ? (
          <>
            <button
              type="button"
              onClick={() => {
                this.setState(() => ({
                  activeButton: false,
                }));
              }}
            >
              Reset ALL
            </button>
            <GoodsList goodsFromServer={goodsFromServer} />
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              this.setState(() => ({
                activeButton: true,
              }));
            }}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
