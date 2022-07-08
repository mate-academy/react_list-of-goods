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
  isStartButtonShown: boolean;
  isReversed: boolean;
  sortBy: string;
  prodMinLength: number;
}

class App extends React.PureComponent<{}, State> {
  state: State = {
    initialGoods: goodsFromServer,
    isStartButtonShown: true,
    isReversed: false,
    sortBy: 'reset',
    prodMinLength: 1,
  };

  onStartButtonClick = () => {
    this.setState({
      isStartButtonShown: false,
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
      prodMinLength: 1,
      isReversed: false,
      sortBy: 'reset',
    });
  };

  render() {
    const {
      initialGoods,
      isStartButtonShown,
      isReversed,
      sortBy,
      prodMinLength,
    } = this.state;

    const currentGoods = [...initialGoods]
      .filter((product) => product.length >= prodMinLength);

    currentGoods.sort((firstGood, secondGood) => {
      switch (sortBy) {
        case 'name':
          return firstGood.localeCompare(secondGood);

        case 'length':
          return firstGood.length - secondGood.length;

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

          {isStartButtonShown && (
            <button
              type="button"
              className="button is-primary is-fullwidth"
              onClick={this.onStartButtonClick}
            >
              Start
            </button>
          )}

          {!isStartButtonShown && (
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
                      name="listLength"
                      onChange={({ target }) => {
                        this.setState({
                          prodMinLength: +target.value,
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
