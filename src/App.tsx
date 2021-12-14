import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

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
  sortBy: string,
  isRendered: boolean,
  isReversed: boolean,
};

class App extends React.PureComponent<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isRendered: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => (
    this.setState({
      isRendered: true,
    }));

  reverseGoods = () => (
    this.setState((state) => ({ isReversed: !state.isReversed })));

  sortByName = () => (
    this.setState({
      sortBy: 'name',
    }));

  sortByLength = () => (
    this.setState({
      sortBy: 'length',
    }));

  resetGoods = () => (
    this.setState({
      isReversed: false,
      sortBy: '',
    })
  );

  render() {
    const {
      goods, isRendered, isReversed, sortBy,
    } = this.state;

    const copyGoods = [...goods].filter((good) => good.replace(' ', '').length >= good.length);

    if (sortBy) {
      copyGoods.sort((goodA, goodB) => {
        switch (sortBy) {
          case 'name':
            return goodA.localeCompare(goodB);
          case 'length':
            return goodA.length - goodB.length;
          default: return 0;
        }
      });
    }

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <div className="App">
        <div className="App__container">
          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={this.showList}
              disabled={isRendered}
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
              onClick={this.sortByName}
            >
              Sort by name
            </button>

            <button
              className="button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.resetGoods}
              className="button"
            >
              Reset
            </button>
          </div>
          {
            isRendered && (
              <GoodsList goods={[...copyGoods]} />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
