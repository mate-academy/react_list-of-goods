/* eslint-disable no-console */
import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
    sorted: [...goodsFromServer],
    display: 'none',
    actions: {
      sortByLength: () => (
        this.setState(prevState => ({
          sorted: prevState.sorted.sort((a, b) => a.length - b.length),
        }))
      ),
      sortReverse: () => (
        this.setState(prevState => ({
          sorted: prevState.sorted.reverse(),
        }))
      ),
      sortByName: () => (
        this.setState(prevState => ({
          sorted: prevState.sorted.sort(),
        }))
      ),
      reset: () => (
        this.setState(prevState => ({
          sorted: [...goodsFromServer],
        }))
      ),
      start: () => (
        this.setState(prevState => ({
          display: 'block',
        }))
      ),
    },
  }

  render() {
    const { sorted, display, actions } = this.state;

    console.log(Object.entries(actions));

    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
        <button
          type="button"
          onClick={() => actions.start()}
        >
          Start
        </button>
        <GoodsList list={sorted} display={display} />

        <button
          type="button"
          onClick={() => actions.sortByLength()}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={() => actions.sortByName()}
        >
          Sort by Name
        </button>
        <button
          type="button"
          onClick={() => actions.sortReverse()}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => actions.reset()}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
