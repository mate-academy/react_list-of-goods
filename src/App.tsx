import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  goodsCopy: string[],
  showGoods: boolean,
  selectedValue: number,
}

export class App extends React.Component<{}, State> {
  state = {
    goodsCopy: [...goodsFromServer],
    showGoods: false,
    selectedValue: 1,
  };

  toggleAToZ = false;

  toggleLength = false;

  showGoods = () => {
    this.setState({ showGoods: true });
  };

  reverseOrder = () => {
    this.setState(state => ({
      goodsCopy: state.goodsCopy.reverse(),
    }));
  };

  sortFromAToZ = () => {
    this.toggleAToZ = !this.toggleAToZ;

    this.setState(state => ({
      goodsCopy: this.toggleAToZ
        ? state.goodsCopy.sort((a, b) => a.localeCompare(b))
        : state.goodsCopy.sort((a, b) => b.localeCompare(a)),
    }));
  };

  resetList = () => {
    this.setState({
      goodsCopy: [...goodsFromServer],
      selectedValue: 1,
    });
  };

  sortByLength = () => {
    this.toggleLength = !this.toggleLength;

    this.setState(state => ({
      goodsCopy: this.toggleLength
        ? state.goodsCopy.sort((a, b) => a.length - b.length)
        : state.goodsCopy.sort((a, b) => b.length - a.length),
    }));
  };

  changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedValue: +event.target.value,
    });
  };

  render() {
    const {
      showGoods,
      goodsCopy,
      selectedValue,
    } = this.state;

    return (
      <>
        <div className="App">
          <h1>Goods</h1>
          <button
            className="Show_Goods"
            type="button"
            onClick={this.showGoods}
            hidden={showGoods}
          >
            Show Goods
          </button>
          {showGoods ? <GoodsList goods={goodsCopy} selectValue={selectedValue} /> : null}
        </div>
        <div
          className={showGoods ? 'Buttons' : ''}
          hidden={!showGoods}
        >
          <button
            type="button"
            onClick={this.reverseOrder}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortFromAToZ}
          >
            Sort Alphabetically
          </button>
          <button
            type="button"
            onClick={this.resetList}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort By Length
          </button>
        </div>
        <label
          htmlFor="selectLength"
        >
          <select
            name="lengthSelector"
            id="selectLength"
            value={this.state.selectedValue}
            hidden={!showGoods}
            onChange={this.changeLength}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
      </>
    );
  }
}
