import React from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    startButton: false,
    reverse: false,
    sortBy: '',
    selectLength: 1,
  };

  reset() {
    this.setState({
      reverse: false,
      sortBy: '',
      selectLength: 1,
    });
  }

  startButton() {
    this.setState({ startButton: false });
  }

  goodsRevers() {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  goodsSortByLength() {
    this.setState({ sortBy: 'length' });
  }

  goodsSortByName() {
    this.setState({ sortBy: 'name' });
  }

  selectLength(event) {
    this.setState({ selectLength: event.target.value });
  }

  render() {
    const { startButton, selectLength } = this.state;

    return (
      <div className="container">
        {startButton ? (
          <button
            type="button"
            className="container__button"
            onClick={() => this.startButton()}
          >
            Push me:)
          </button>
        ) : (
          <div>
            <button
              type="button"
              className="container__Button-list"
              onClick={() => this.goodsRevers()}
            >
              Reverse
            </button>

            <button
              type="button"
              className="container__Button-list"
              onClick={() => this.goodsSortByName()}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="container__Button-list"
              onClick={() => this.goodsSortByLength()}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="container__Button-list"
              onClick={() => this.reset()}
            >
              Reset
            </button>

            <div className="container__select">
              <label htmlFor="minLength" className="container__label">
                Select the minimum list length:
                <select
                  className="container__button-select"
                  id="minLength"
                  name="minLength"
                  onChange={event => this.selectLength(event)}
                  value={selectLength}
                >
                  {[...Array(10).keys()].map((element) => {
                    const number = element + 1;

                    return (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <ListOfGoods
              goods={goodsFromServer}
              stateValue={{ ...this.state }}
            />
          </div>
        )}

      </div>
    );
  }
}

export default App;
