import React from 'react';

import './App.css';

import GoodsList from './components/GoodsList';

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
  initialGoods: string[];
  isStarted: boolean;
  isReversed: boolean;
  sortBy: string;
  minLength: number;
}

class App extends React.PureComponent<{}, State> {
  state: State = {
    initialGoods: goodsFromServer,
    isStarted: true,
    isReversed: false,
    sortBy: 'reset',
    minLength: 1,
  };

  onStartButtonClick = () => {
    this.setState({
      isStarted: false,
    });
  };

  onReverseButtonClick = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  onSortByNameButtonClick = () => {
    this.setState({
      isReversed: false,
      sortBy: 'name',
    });
  };

  onSortByLengthButtonClick = () => {
    this.setState({
      isReversed: false,
      sortBy: 'length',
    });
  };

  onResetButtonClick = () => {
    this.setState({
      minLength: 1,
      isReversed: false,
      sortBy: 'reset',
    });
  };

  render() {
    const {
      initialGoods,
      isStarted,
      isReversed,
      sortBy,
      minLength,
    } = this.state;

    const currentGoods = [...initialGoods]
      .filter((product) => product.length >= minLength);

    currentGoods.sort((firstProduct, secondProduct) => {
      switch (sortBy) {
        case 'name':
          return firstProduct.localeCompare(secondProduct);

        case 'length':
          return firstProduct.length - secondProduct.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      currentGoods.reverse();
    }

    return (
      <div className="App">
        <div className="box container is-max-desktop">
          <h1 className="title">Goods</h1>

          {isStarted && (
            <button
              type="button"
              className="button is-primary is-fullwidth"
              onClick={this.onStartButtonClick}
            >
              Start
            </button>
          )}

          {!isStarted && (
            <div className="columns">
              <div className="column">
                <GoodsList goods={currentGoods} />
              </div>

              <div className="column">
                <div className="interaction-container">
                  <button
                    type="button"
                    className="button is-primary is-fullwidth"
                    onClick={this.onReverseButtonClick}
                  >
                    Reverse
                  </button>
                  <button
                    type="button"
                    className="button is-primary is-fullwidth"
                    onClick={this.onSortByNameButtonClick}
                  >
                    Sort alphabetically
                  </button>
                  <button
                    type="button"
                    className="button is-primary is-fullwidth"
                    onClick={this.onResetButtonClick}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="button is-primary is-fullwidth"
                    onClick={this.onSortByLengthButtonClick}
                  >
                    Sort by length
                  </button>
                  <div className="select is-primary is-fullwidth">
                    <select
                      name="minLength"
                      onChange={({ target }) => {
                        this.setState({
                          minLength: +target.value,
                        });
                      }}
                    >
                      {[...new Array(10)].map((_, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <option key={i} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
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
