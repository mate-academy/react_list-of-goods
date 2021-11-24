import React from 'react';
import './App.css';
import { ListGoods } from './ListGoods';

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
  buttonStatus: boolean,
  isReversed: boolean,
  sortBy: string,
  goods: string[],
  lengthLimit: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    buttonStatus: true,
    isReversed: false,
    sortBy: '',
    goods: goodsFromServer,
    lengthLimit: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlph = () => {
    this.setState({ sortBy: 'alphabetically' });
  };

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ sortBy: 'default' });
  };

  limit = () => {
    const selectValue = (document.getElementById('input_length') as HTMLInputElement).value;

    if (selectValue) {
      this.setState({ lengthLimit: parseInt(selectValue, 10) });
    }
  };

  render() {
    const {
      buttonStatus,
      isReversed,
      sortBy,
      lengthLimit,
      goods,
    } = this.state;
    const gooodsList = [...goods];

    gooodsList.sort((f1, f2) => {
      switch (sortBy) {
        case 'alphabetically':
          return f1.localeCompare(f2);

        case 'length':
          return f1.length - f2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      gooodsList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className="button start"
          type="button"
          id="start"
          onClick={() => {
            const startButton = document.getElementById('start');

            if (startButton) {
              startButton.hidden = true;
            }

            this.setState({ buttonStatus: false });
          }}
        >
          Start
        </button>
        {buttonStatus === false
          && (
            <>
              <button
                type="button"
                className="button reverse"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button sort_alph"
                onClick={this.sortAlph}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="button sort_length"
                onClick={this.sortLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.reset}
              >
                Reset
              </button>
              <input
                className="input_length"
                id="input_length"
                type="number"
                defaultValue={1}
                min="1"
                max="10"
                onChange={this.limit}
              />
            </>
          )}
        {
          (buttonStatus === false)
          && <ListGoods goods={gooodsList.filter(good => good.length >= lengthLimit)} />
        }
      </div>
    );
  }
}

export default App;
