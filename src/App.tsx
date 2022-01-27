import React from 'react';
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

type State = {
  initialGoods: string[],
  goods: string[],
  showHide: {
    isVisibleButtonStart: boolean,
    isVisibleListOfGoods: boolean,
    isVisibleButtonFinish: boolean;
    isVisibleButtonRevers: boolean;
    isVisibleButtonSortAZ: boolean;
    isVisibleButtonReset: boolean;
    isVisibleButtonSortByLength: boolean;
    isVisibleFormSelect: boolean;
  },
  maxLength: number;
  sortedAZ: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    initialGoods: [...goodsFromServer],
    goods: [...goodsFromServer],
    showHide: {
      isVisibleButtonStart: true,
      isVisibleListOfGoods: false,
      isVisibleButtonFinish: false,
      isVisibleButtonRevers: false,
      isVisibleButtonSortAZ: false,
      isVisibleButtonReset: false,
      isVisibleButtonSortByLength: false,
      isVisibleFormSelect: false,
    },
    maxLength: 1,
    sortedAZ: false,
  };

  startHandler = () => {
    this.setState(prevState => ({
      showHide: {
        ...prevState.showHide,
        isVisibleButtonStart: false,
        isVisibleListOfGoods: true,
        isVisibleButtonFinish: true,
        isVisibleButtonRevers: true,
        isVisibleButtonSortAZ: true,
        isVisibleButtonReset: true,
        isVisibleButtonSortByLength: true,
        isVisibleFormSelect: true,
      },
    }));
  };

  finishHandler = () => {
    this.setState(prevState => ({
      showHide: {
        ...prevState.showHide,
        isVisibleButtonStart: true,
        isVisibleListOfGoods: false,
        isVisibleButtonFinish: false,
        isVisibleButtonRevers: false,
        isVisibleButtonSortAZ: false,
        isVisibleButtonReset: false,
        isVisibleButtonSortByLength: false,
        isVisibleFormSelect: false,
      },
    }));
  };

  sortByAlphabetHandler = () => {
    if (!this.state.sortedAZ) {
      this.setState(prevState => ({
        goods: [...prevState.goods.sort((a: string, b: string) => a.localeCompare(b))],
        sortedAZ: true,
      }));
    } else {
      this.setState(prevState => ({
        goods: [...prevState.goods.sort((a: string, b: string) => b.localeCompare(a))],
        sortedAZ: false,
      }));
    }
  };

  reverseListHandler = () => {
    this.setState((prevState) => ({ goods: [...prevState.goods.reverse()] }));
  };

  clearHandler = () => {
    this.setState((prevState) => ({
      goods: [...prevState.initialGoods],
      maxLength: 1,
    }));
  };

  sortByLengthHandler = () => {
    this.setState((prevState) => ({
      goods: [...prevState.goods.sort((a, b) => a.length - b.length)],
    }));
  };

  filterByLengthHandler = (value: string) => {
    this.setState(() => ({ maxLength: +value }));
  };

  render(): React.ReactNode {
    const {
      goods,
      showHide,
      maxLength,
      sortedAZ,
    } = this.state;

    const {
      isVisibleButtonStart,
      isVisibleButtonFinish,
      isVisibleListOfGoods,
      isVisibleButtonRevers,
      isVisibleButtonSortAZ,
      isVisibleButtonReset,
      isVisibleButtonSortByLength,
      isVisibleFormSelect,
    } = showHide;

    const preparedGoods = goods.filter(good => good.length >= maxLength);

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>{goods.length}</p>

        {isVisibleButtonStart && (
          <button
            type="button"
            onClick={() => {
              this.startHandler();
            }}
          >
            Start
          </button>
        )}

        {isVisibleButtonFinish && (
          <button
            type="button"
            onClick={() => {
              this.finishHandler();
            }}
          >
            Finish
          </button>
        )}

        {isVisibleButtonReset && (
          <button
            type="button"
            onClick={() => {
              this.clearHandler();
            }}
          >
            Reset
          </button>
        )}

        {isVisibleButtonRevers && (
          <button
            type="button"
            onClick={() => {
              this.reverseListHandler();
            }}
          >
            Revers
          </button>
        )}

        {isVisibleButtonSortAZ && (
          <button
            type="button"
            onClick={() => {
              this.sortByAlphabetHandler();
            }}
          >
            {!sortedAZ
              ? ('Sort A-Z')
              : ('Sort Z-A')}
          </button>
        )}

        {isVisibleButtonSortByLength && (
          <button
            type="button"
            onClick={() => {
              this.sortByLengthHandler();
            }}
          >
            Sort by length
          </button>
        )}

        {isVisibleFormSelect && (
          <>
            <p>
              <span>Filter by length </span>
              <select
                name="select"
                id="select"
                value={this.state.maxLength}
                onChange={(event) => this.filterByLengthHandler(event.target.value)}
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
            </p>
          </>
        )}

        {isVisibleListOfGoods && (
          <ul>
            {
              preparedGoods.map(good => (
                <li
                  key={good}
                >
                  {good}
                </li>
              ))
            }
          </ul>
        )}
      </div>
    );
  }
}

export default App;
