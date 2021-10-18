import React from 'react';
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

type State = {
  goods: string[],
  isVisible: boolean,
  isReverse: boolean,
  sortBy: string,
  goodsLength: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: true,
    isReverse: false,
    sortBy: '',
    goodsLength: 1,
  };

  printGoods = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  reverseGoods = () => {
    this.setState(state => ({ isReverse: !state.isReverse }));
  };

  sortAlphabet = () => {
    this.setState(() => ({
      sortBy: 'alph',
      isReverse: false,
    }));
  };

  sortLength = () => {
    this.setState(() => ({
      sortBy: 'length',
      isReverse: false,
    }));
  };

  reset = () => {
    this.setState(({
      sortBy: '',
      isReverse: false,
      goodsLength: 1,
    }));
  };

  lengthGetting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ goodsLength: Number(event.currentTarget.value) });
  };

  render() {
    const {
      goods,
      isVisible,
      isReverse,
      sortBy,
      goodsLength,
    } = this.state;

    let goodsForWork: string[] = [];

    if (!isVisible) {
      goodsForWork = [...goods].filter(good => (good.length >= goodsLength));
    }

    if (sortBy !== '') {
      goodsForWork = goodsForWork.sort((g1, g2) => (
        (sortBy === 'alph')
          ? g1.localeCompare(g2)
          : g1.length - g2.length
      ));
    }

    if (isReverse) {
      goodsForWork.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          className={`
            button
            ${!isVisible && 'button__visible'}
          `}
          type="button"
          onClick={this.printGoods}
        >
          Start
        </button>
        <button
          className="button"
          type="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortAlphabet}
        >
          Sort Alphabetically
        </button>
        <button
          className="button"
          type="button"
          onClick={this.sortLength}
        >
          Sort by Length
        </button>
        <button
          className="button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <div>
          Selecting good length
          <select
            id="selector"
            onChange={this.lengthGetting}
          >
            <option selected={goodsLength === 1}>{goodsLength}</option>
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
        </div>

        <ul>
          {goodsForWork.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
