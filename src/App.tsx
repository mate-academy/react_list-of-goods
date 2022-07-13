import React from 'react';
import './App.css';
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

interface State {
  goods: string[],
  itsBegin : boolean,
  isSorted :boolean,
  isReversed: boolean,
  sortBy: string,
  selectedLength: number,
}

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    itsBegin: false,
    isSorted: false,
    isReversed: false,
    sortBy: '',
    selectedLength: 1,
  };

  start = () => {
    this.setState((oldState) => ({
      itsBegin: !oldState.itsBegin,
    }));
  };

  reverse = () => {
    this.setState((oldState) => ({
      isReversed: !oldState.isReversed,
      isSorted: true,
    }));
  };

  SortByAlph = () => {
    this.setState({ sortBy: 'A-Z', isSorted: true });
  };

  SortByLength = () => {
    this.setState({ sortBy: 'Length', isSorted: true });
  };

  Reset = () => {
    if (this.state.isSorted) {
      this.setState({
        goods: goodsFromServer,
        isReversed: false,
        isSorted: false,
        sortBy: '',
        selectedLength: 1,
      });
    }
  };

  selectLenght = (value: number) => {
    this.setState({ selectedLength: value });
  };

  render() {
    const {
      goods,
      itsBegin,
      isReversed,
      sortBy,
      selectedLength,
    } = this.state;

    const visibleGoods = goods.filter(
      good => good.length >= selectedLength,
    );

    visibleGoods.sort((currentGood, nextGood) => {
      switch (sortBy) {
        case 'A-Z':
          return currentGood.localeCompare(nextGood);

        case 'Length':
          return currentGood.length - nextGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <div className="container">
          {itsBegin
            ? (
              <button
                className="button is-success level-item"
                type="button"
                onClick={this.start}
              >
                Start
              </button>
            )
            : (
              <div className="message is-primary">
                <div className="message-header title is-3 level">
                  <h1>Goods</h1>
                  <button
                    className="button is-warning"
                    type="button"
                    onClick={this.Reset}
                  >
                    Reset
                  </button>
                </div>
                <div className="">
                  <div className="container">
                    <GoodsList goods={visibleGoods} />
                  </div>
                </div>
                <div className="buttons-container content level">
                  <button
                    className="button is-primary"
                    type="button"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>
                  <button
                    className="button is-primary"
                    type="button"
                    onClick={this.SortByAlph}
                  >
                    Sort by A-Z
                  </button>
                  <button
                    className="button is-primary"
                    type="button"
                    onClick={this.SortByLength}
                  >
                    Sort by lenght
                  </button>
                  <div className="select is-success">
                    <select
                      value={selectedLength}
                      onChange={({ target }) => {
                        this.selectLenght(Number(target.value));
                      }}
                    >
                      {Array.from(Array(11).keys()).map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

            )}

        </div>
      </div>
    );
  }
}

export default App;
