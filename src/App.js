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
    goods: [...goodsFromServer],
    displayList: false,
    arrayList: [...goodsFromServer],
  };

  reverseList = () => {
    this.setState(state => ({
      arrayList: [...state.goods].reverse(),
    }));
  };

  sortList = () => {
    this.setState(state => ({
      arrayList: [...state.goods].sort(),
    }));
  };

  sortByLengthList = () => {
    this.setState(state => ({
      arrayList: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { goods, displayList, arrayList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {displayList === false && (
        <button
          type="button"
          onClick={() => {
            this.setState({
              displayList: true,
            });
          }}
        >
          Start
        </button>
        )}

        {displayList === true && (
        <>
          <button type="button" onClick={this.reverseList}>Reverse</button>

          <button
            type="button"
            onClick={this.sortList}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLengthList}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState({
                arrayList: [...goods],
              });
            }}
          >
            Reset
          </button>
        </>
        )}

        {displayList && <GoodsList goods={arrayList} />}
      </div>
    );
  }
}

export default App;
