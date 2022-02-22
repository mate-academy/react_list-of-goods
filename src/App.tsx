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
  isReversed: boolean,
  sortBy: string,
  selectedOption: number,
};

class App extends React.PureComponent<{}, Props> {
  state = {
    goods: goodsFromServer,
    confirmBtn: true,
    isReversed: false,
    sortBy: '',
    selectedOption: 1,
  };

  reversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alpha' });
  };

  reset = () => {
    this.setState({
      selectedOption: 1,
      isReversed: false,
      sortBy: '',
    });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  handleChange = (e: string) => {
    this.setState(() => ({ selectedOption: +e }));
  };

  render() {
    const {
      goods,
      confirmBtn,
      isReversed,
      sortBy,
      selectedOption,
    } = this.state;

    const copyListOfGoods
      = [...goods].filter(item => item.length >= selectedOption);

    copyListOfGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alpha':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyListOfGoods.reverse();
    }

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
        {!confirmBtn && <ListOfGoods goods={copyListOfGoods} />}
      </div>
    );
  }
}

export default App;
