import React from 'react';
import './App.css';
import { Buttons } from './Buttons';

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
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
  lengthGood: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
    lengthGood: 1,
  };

  showGoods = () => {
    this.setState({
      isVisible: true,
    });
  };

  hideGoods = () => {
    this.setState({
      isVisible: false,
      sortBy: '',
    });
  };

  goodsReverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'goodLength',
    });
  };

  recetList = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
      lengthGood: 1,
    });
  };

  sortByExectLength = (newLength: number) => {
    this.setState({ lengthGood: newLength });
  };

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      sortBy,
      lengthGood,
    } = this.state;

    const copyGoods = [...goods]
      .filter((good) => good.length >= lengthGood);

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'goodLength':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <div className="app">
        <h1 className="app__title">
          Goods
        </h1>
        <p className="app__text">
          {`It has in total ${goodsFromServer.length} items`}
        </p>
        {isVisible
          ? (
            <div className="app__container">

              <ul className="app__list">
                {copyGoods.map((good) => (
                  <li className="app__item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
              <Buttons
                hideGoods={this.hideGoods}
                goodsReverse={this.goodsReverse}
                sortByAlph={this.sortByAlph}
                sortByLength={this.sortByLength}
                recetList={this.recetList}
                sortByExectLength={this.sortByExectLength}
                exectLength={this.state.lengthGood}
              />
            </div>
          )
          : (
            <button
              type="button"
              className="app__button"
              onClick={this.showGoods}
            >
              Start
            </button>
          )}

      </div>
    );
  }
}

export default App;
