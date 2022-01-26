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
    buttonReset: boolean;
    buttonRevers: boolean;
    buttonSortAZ: boolean;
    formSelect: boolean;
  },
  maxLength: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    initialGoods: [...goodsFromServer],
    goods: [...goodsFromServer],
    showHide: {
      buttonStart: true,
      listOfGoods: false,
      buttonFinish: false,
      buttonReset: false,
      buttonRevers: false,
      buttonSortAZ: false,
      formSelect: false,
    },
    maxLength: 1,
  };

  startHandler = () => {
    this.setState(prevState => ({
      showHide: {
        ...prevState.showHide,
        buttonStart: false,
        listOfGoods: true,
        buttonFinish: true,
        buttonReset: true,
        buttonRevers: true,
        buttonSortAZ: true,
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
        buttonReset: false,
        buttonRevers: false,
        buttonSortAZ: false,
        formSelect: false,
      },
    }));
  };

  sortByAlphabetHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
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

  sortAlphabeticallyHandler = () => {
    this.setState((prevState) => ({ goods: [...prevState.goods.sort()] }));
  };

  filterByLengthHandler = (value: string) => {
    this.setState(() => ({ maxLength: +value }));
  };

  render(): React.ReactNode {
    const {
      goods,
      showHide,
      maxLength,
    } = this.state;

    const {
      buttonStart,
      buttonFinish,
      listOfGoods,
      buttonReset,
      buttonRevers,
      buttonSortAZ,
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
              this.sortAlphabeticallyHandler();
            }}
          >
            Sort alphabetically
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
