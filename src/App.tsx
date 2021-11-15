import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.css';

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
  initialGoods: string[],
  sortBy: string,
  isRendered: boolean,
  isReversed: boolean,
  selectedLength: number,
}

class App extends React.Component<{}, State> {
  state = {
    initialGoods: [...goodsFromServer],
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
      initialGoods,
      isRendered,
      isReversed,
      sortBy,
      selectedLength,
    } = this.state;

    let currentGoods = [...initialGoods].filter((good) => good.length >= selectedLength);

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
      <>
        <h1>
          Goods list:
        </h1>
        <button
          type="button"
          onClick={this.showList}
          disabled={isRendered}
          className="button"
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.reverseList}
          className="button"
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByAlphabet}
          className="button"
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
          className="button"
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.resetList}
          className="button"
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
        {
          isRendered && (
            <GoodsList initialGoods={[...currentGoods]} />
          )
        }
      </>
    );
  }
}

export default App;
