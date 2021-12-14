import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';

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
  goods: string[],
  sortBy: string,
  isRendered: boolean,
  isReversed: boolean,
  selectedLength: number,
}

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isRendered: false,
    isReversed: false,
    sortBy: '',
    selectedLength: 1,
  };

  showList = () => (
    this.setState({
      isRendered: true,
    }));

  reverseList = () => (
    this.setState((state) => ({
      isReversed: !state.isReversed,
    })));

  sortByAlphabet = () => (
    this.setState({
      sortBy: 'alphabet',
    }));

  sortByLength = () => (
    this.setState({
      sortBy: 'length',
    }));

  resetList = () => (
    this.setState({
      sortBy: '',
      isReversed: false,
      selectedLength: 1,
    })
  );

  changeLengthValue = (event: React.ChangeEvent<HTMLInputElement>) => (
    this.setState({
      selectedLength: Number(event.target.value),
    })
  );

  render() {
    const {
      goods,
      isRendered,
      isReversed,
      sortBy,
      selectedLength,
    } = this.state;

    let currentGoods = [...goods].filter((good) => good.length >= selectedLength);

    if (sortBy) {
      currentGoods = [...currentGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          default: return 0;
        }
      });
    }

    if (isReversed) {
      currentGoods.reverse();
    }

    return (
      <div className="App">
        <h1>
          Goods list:
        </h1>
        {
          isRendered && (
            <GoodsList goods={[...currentGoods]} />
          )
        }

        <button
          type="button"
          onClick={this.showList}
          disabled={isRendered}
          className="btn"
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.reverseList}
          className="btn"
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByAlphabet}
          className="btn"
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
          className="btn"
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.resetList}
          className="btn"
        >
          Reset
        </button>

        <input
          type="number"
          value={selectedLength}
          min="1"
          max="10"
          onChange={this.changeLengthValue}
        />
      </div>
    );
  }
}

export default App;
