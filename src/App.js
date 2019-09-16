import React from 'react';
import List from './Components/List';
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
    isActiveStart: false,
  }

  handleStart = () => {
    this.setState(prevState => ({
      isActiveStart: !prevState.isActiveStart,
    }));
  }

  render() {
    const { isActiveStart } = this.state;

    return (
      <div className="wrapper">
        <button
          type="button"
          onClick={this.handleStart}
          className={
            isActiveStart
              ? 'button--active'
              : 'button-main'
          }
        >
          Start!
        </button>
        <div
          className={
            isActiveStart
              ? 'app--active'
              : 'app--inactive'
          }
        >
          <h1 className="main-title">Goods</h1>
          <List goods={goodsFromServer} />
        </div>
      </div>
    );
  }
}

export default App;
