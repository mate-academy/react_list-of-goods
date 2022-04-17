import React from 'react';
import './App.css';
import { Goods } from './components/Goods';
import SelectedList from './components/SelectList';

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
  goodsList: string[],
  reverseList: boolean,
  start: boolean,
  sortBy: string,
  selectValue: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsList: [],
    start: false,
    reverseList: false,
    sortBy: '',
    selectValue: 1,
  };

  start = () => {
    this.setState({
      goodsList: goodsFromServer,
      start: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reverseList: !state.reverseList,
    }));
  };

  sortAlphabet = () => {
    this.setState(() => ({
      sortBy: 'alphabet',
    }));
  };

  sortLength = () => {
    this.setState(() => ({
      sortBy: 'length',
    }));
  };

  reset = () => {
    this.setState({
      reverseList: false,
      sortBy: '',
      selectValue: 1,
    });
  };

  select = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectValue: +event.target.value,
    });
  };

  render() {
    const {
      goodsList,
      start,
      reverseList,
      sortBy,
      selectValue,
    } = this.state;

    const visibleList: string[] = goodsList.filter(
      good => good.length >= selectValue,
    );

    visibleList.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (reverseList) {
      visibleList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className={start ? 'button__hidden' : 'button'}
          onClick={this.start}
        >
          Start
        </button>

        <button
          type="button"
          className={!start ? 'button__hidden' : 'button'}
          onClick={this.reverse}
        >
          Revers
        </button>

        <button
          type="button"
          className={!start ? 'button__hidden' : 'button'}
          onClick={this.sortAlphabet}
        >
          Sort alphabet
        </button>

        <button
          type="button"
          className={!start ? 'button__hidden' : 'button'}
          onClick={this.sortLength}
        >
          Sort length
        </button>

        <button
          type="button"
          className={!start ? 'button__hidden' : 'button'}
          onClick={this.reset}
        >
          Reset
        </button>

        <button type="button" className={start ? 'button' : 'button__hidden'}>
          <label>
            {'Select '}
            <select
              value={selectValue}
              onChange={this.select}
            >
              <SelectedList />
            </select>
          </label>
        </button>
        <Goods goods={visibleList} />
      </div>
    );
  }
}

export default App;
