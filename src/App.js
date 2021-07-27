import React from 'react';
import './App.scss';

import { Goodlist } from './components/GoodList/Goodlist';

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
    isStart: false,
    wait: 500,
  }

  startingApp = () => {
    this.setState(state => ({
      isStart: !state.isStart,
    }));
  }

  render() {
    const { isStart, wait } = this.state;
    const { startingApp } = this;
    const style = {
      transform: 'translateY(-100%)',
      transition: `transform ${wait}ms ease-out`,
      transitionDelay: `0s, ${wait}ms`,
    };

    return (
      <div className="app">
        <div className="first-view" style={isStart ? { ...style } : null}>
          <h1 className="first-view__title">
            I know you want to sort something!
          </h1>
          <img
            className="first-view__picture"
            src="./img/sem-1.png"
            alt="Uncle Sem"
          />
          <button
            className="first-view__btn"
            type="button"
            onClick={startingApp}
          >
            Start
          </button>
        </div>
        {
          isStart
            ? <Goodlist goodlist={goodsFromServer} />
            : null
        }
      </div>
    );
  }
}

export default App;
