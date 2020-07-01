import React from 'react';
import './App.css';
import { GoodsArea } from './GoodsArea';

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

const selectOptionsFromServer = [...Array(10).keys()];

class App extends React.Component {
  state = {
    selectOptions: selectOptionsFromServer,
    isStarted: false,
    goodsTemp: goodsFromServer,
  }

  handleStart = () => {
    this.setState(prevState => ({ isStarted: !prevState.isStarted }));
  }

  render() {
    const { goodsTemp, isStarted, selectOptions } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isStarted
          ? (
            <GoodsArea
              goods={goodsTemp}
              ascSort={this.handleAscSort}
              options={selectOptions}
            />
          )
          : (
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.handleStart}
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
