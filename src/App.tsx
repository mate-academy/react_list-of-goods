import React from 'react';
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

type Props = {};

type State = {
  goods: string[],
  isVisible: boolean,
  isReverse: boolean,
  sortBy: string,
  goodsLength: number,
};

export class App extends React.Component<Props, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReverse: false,
    sortBy: '',
    goodsLength: 1,
  };

  showList = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  reverseList = () => {
    this.setState(state => ({ isReverse: !state.isReverse }));
  };

  sortyByName = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortyByLength = () => {
    this.setState({ sortBy: 'length' });
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

    let goodsSelected = goods.filter(good => good.length >= goodsLength);

    if (sortBy !== '') {
      goodsSelected = goodsSelected.sort((g1, g2) => (
        (sortBy === 'alphabet')
          ? g1.localeCompare(g2)
          : g1.length - g2.length
      ));
    }

    if (isReverse) {
      goodsSelected.reverse();
    }

    return (
      <div className="app">
        <h1>Goods</h1>

        <button
          type="button"
          className="app__button"
          onClick={this.showList}
        >
          Start
        </button>

        <button
          type="button"
          className="app__button"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          className="app__button"
          type="button"
          onClick={this.sortyByName}
        >
          Sort Alphabetically
        </button>

        <button
          className="app__button"
          type="button"
          onClick={this.sortyByLength}
        >
          Sort by Length
        </button>

        <button
          className="app__button"
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <div className="app__select">
          Select good length:
          {'  '}
          <select
            id="selector"
            onChange={this.lengthGetting}
          >
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
        </div>

        {isVisible && <GoodsList goods={goodsSelected} />}
      </div>
    );
  }
}
