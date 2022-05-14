import { Component } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

type State = {
  minLength: number,
  visibleGoods: string[],
  isVisibleList: boolean,
};

class App extends Component<{}, State> {
  state: State = {
    minLength: 1,
    visibleGoods: [...goodsFromServer],
    isVisibleList: false,
  };

  filterList = () => {
    this.setState((state) => ({
      visibleGoods: goodsFromServer.filter(
        good => good.length >= state.minLength,
      ),
    }));
  };

  updateVisibleList = () => {
    this.setState({ isVisibleList: true });
  };

  reverseList = () => {
    this.setState(state => {
      return {
        visibleGoods: [...state.visibleGoods].reverse(),
      };
    });
  };

  sortByName = () => {
    this.setState(state => {
      return {
        visibleGoods: [...state.visibleGoods].sort(
          (g1, g2) => g1.localeCompare(g2),
        ),
      };
    });
  };

  sortByLength = () => {
    this.setState(state => {
      return {
        visibleGoods: [...state.visibleGoods].sort(
          (g1, g2) => g1.length - g2.length,
        ),
      };
    });
  };

  resetSortList = () => {
    this.setState({
      minLength: 1,
      visibleGoods: [...goodsFromServer],
    });
  };

  changeLength = (value: number) => {
    this.setState(() => ({ minLength: value }));
    this.filterList();
  };

  render() {
    const {
      visibleGoods,
      isVisibleList,
      minLength,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisibleList
          ? (
          <button
            type="submit"
            onClick={this.updateVisibleList}
          >
            Start
          </button>
        ) : (
          <>
            <select
              onChange={
                (event) => this.changeLength(+event.target.value)
              }
              value={minLength}
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
            <button
              type="submit"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="submit"
              onClick={this.sortByName}
            >
              Sort alphabetically
            </button>
            <button
              type="submit"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              type="submit"
              onClick={this.resetSortList}
            >
              Reset
            </button>
            <GoodsList goods={visibleGoods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
