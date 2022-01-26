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
    buttonStart: boolean,
    listOfGoods: boolean,
    buttonFinish: boolean;
    buttonRevers: boolean;
    buttonSortAZ: boolean;
    buttonReset: boolean;
    buttonSortByLength: boolean;
    formSelect: boolean;
  },
  maxLength: number;
  sortedAZ: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    initialGoods: [...goodsFromServer],
    goods: [...goodsFromServer],
    showHide: {
      buttonStart: true,
      listOfGoods: false,
      buttonFinish: false,
      buttonRevers: false,
      buttonSortAZ: false,
      buttonReset: false,
      buttonSortByLength: false,
      formSelect: false,
    },
    maxLength: 1,
    sortedAZ: false,
  };

  startHandler = () => {
    this.setState(prevState => ({
      showHide: {
        ...prevState.showHide,
        buttonStart: false,
        listOfGoods: true,
        buttonFinish: true,
        buttonRevers: true,
        buttonSortAZ: true,
        buttonReset: true,
        buttonSortByLength: true,
        formSelect: true,
      },
    }));
  };

  finishHandler = () => {
    this.setState(prevState => ({
      showHide: {
        ...prevState.showHide,
        buttonStart: true,
        listOfGoods: false,
        buttonFinish: false,
        buttonRevers: false,
        buttonSortAZ: false,
        buttonReset: false,
        buttonSortByLength: false,
        formSelect: false,
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
      buttonStart,
      buttonFinish,
      listOfGoods,
      buttonRevers,
      buttonSortAZ,
      buttonReset,
      buttonSortByLength,
      formSelect,
    } = showHide;

    const preparedGoods = goods.filter(good => good.length >= maxLength);

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>{goodsFromServer.length}</p>

        {buttonStart && (
          <button
            type="button"
            onClick={() => {
              this.startHandler();
            }}
          >
            Start
          </button>
        )}

        {buttonFinish && (
          <button
            type="button"
            onClick={() => {
              this.finishHandler();
            }}
          >
            Finish
          </button>
        )}

        {buttonReset && (
          <button
            type="button"
            onClick={() => {
              this.clearHandler();
            }}
          >
            Reset
          </button>
        )}

        {buttonRevers && (
          <button
            type="button"
            onClick={() => {
              this.reverseListHandler();
            }}
          >
            Revers
          </button>
        )}

        {buttonSortAZ && (
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

        {buttonSortByLength && (
          <button
            type="button"
            onClick={() => {
              this.sortByLengthHandler();
            }}
          >
            Sort by length
          </button>
        )}

        {formSelect && (
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
        )}

        {listOfGoods && (
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
