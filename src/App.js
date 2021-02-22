import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

export const goodsFromServer = [
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
    initialGoods: [...goodsFromServer],
    goods: goodsFromServer,
    isLoading: false,
    typeSorting: '',
    selectCount: 1,
  }

  selectedFilter = (e) => {
    const count = +e.target.value;

    this.setState(state => ({
      typeSorting: '',
      selectCount: count,
      goods: state.initialGoods.filter(g => g.length >= count),
    }));
  }

  reset = () => {
    this.setState(state => ({
      typeSorting: 'reset', selectCount: 1, goods: state.initialGoods,
    }));
  }

  render() {
    const {
      isLoading,
      typeSorting,
      initialGoods,
      goods,
      selectCount,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        { ' ' }
        <button
          className="start"
          type="button"
          onClick={() => this.setState({ isLoading: !isLoading })}
        >
          Start
        </button>
        <button
          type="button"
          onClick={() => this.setState({ typeSorting: 'reverse' })}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => this.setState({ typeSorting: 'abc' })}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => this.setState({ typeSorting: 'length' })}
        >
          Sort by length
        </button>
        <select value={selectCount} onChange={this.selectedFilter}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        {
          isLoading
            ? (
              <GoodsList
                initialGoods={initialGoods}
                goods={goods}
                sort={typeSorting}
              />
            )
            : null}
      </div>
    );
  }
}

export default App;
