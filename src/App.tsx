import React from 'react';
import './App.css';
import { ListOfGoods } from './ListOfGoods';

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

type Props = {
  goods: string[],
  confirmBtn: boolean,
  selectedOption: number,
};

class App extends React.Component<{}, Props> {
  state = {
    confirmBtn: true,
    selectedOption: 1,
    goods: [...goodsFromServer],
  };

  reversed = () => {
    this.setState((state) => ({ goods: state.goods.reverse() }));
  };

  sortAlphabetically = () => {
    this.setState((state) => {
      const sort = state.goods.sort((a, b) => a.localeCompare(b));

      return {
        goods: sort,
      };
    });
  };

  sortByLength = () => {
    this.setState((state) => {
      const sort = state.goods.sort((a, b) => a.length - b.length);

      return {
        goods: sort,
      };
    });
  };

  handleChange = (e: string) => {
    this.setState(() => ({ selectedOption: +e }));
  };

  reset = () => {
    this.setState({
      selectedOption: 1,
      goods: goodsFromServer,
    });
  };

  render() {
    const {
      goods,
      confirmBtn,
      selectedOption,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <div className="button-section">
          {confirmBtn
            && (
              <button
                type="button"
                className="button"
                onClick={() => this.setState(state => ({ confirmBtn: !state.confirmBtn }))}
              >
                Start
              </button>
            )}
          {!confirmBtn
            && (
              <button
                type="button"
                className="button"
                onClick={this.reversed}
              >
                Reverse
              </button>
            )}
          <button
            type="button"
            className="button"
            onClick={this.sortAlphabetically}
          >
            Sort A-Z
          </button>
          <button
            type="button"
            className="button"
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <select
            className="button"
            value={selectedOption}
            onChange={(e) => this.handleChange(e.target.value)}
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
        </div>
        {!confirmBtn && <ListOfGoods goods={goods} select={selectedOption} />}
      </div>
    );
  }
}

export default App;
