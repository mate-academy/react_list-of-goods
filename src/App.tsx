import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

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

const lengthArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  isVisible: boolean,
  goods: string[];
  lengthValue: number,
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    goods: goodsFromServer,
    lengthValue: 1,
  };

  isVisible = () => {
    this.setState((state) => ({ isVisible: !state.isVisible }));
  };

  reverseGoods = () => {
    this.setState((state) => ({ goods: [...state.goods].reverse() }));
  };

  sortAlphabetically = () => {
    this.setState((state) => ({ goods: [...state.goods].sort() }));
  };

  sortByLength = () => {
    this.setState((state) => (
      {
        goods: [...state.goods]
          .sort((good1, good2) => good1.length - good2.length),
      }
    ));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      lengthValue: 1,
    });
  };

  render() {
    const { isVisible, goods, lengthValue } = this.state;
    const filteredGoods = goods.filter(good => good.length >= lengthValue);

    return (
      <div className="App">

        {!isVisible
            && (
              <section className="App__start">
                <button
                  className="button is-primary"
                  type="button"
                  onClick={this.isVisible}
                >
                  Start
                </button>
                <h2 className="title is-3">press the button to start</h2>
              </section>
            )}

        {isVisible
          && (
            <section className="box App__section">
              <h1
                className="
                title is-1 mt-5
                is-flex is-justify-content-center"
              >
                GoodsList:
              </h1>

              <div className="level-right">
                <h3 className="mr-2 is-size-5">
                  min length:
                </h3>

                <div className="select is-primary is-small">
                  <select
                    value={lengthValue}
                    onChange={(event) => {
                      this.setState({
                        lengthValue: +(event.currentTarget.value),
                      });
                    }}
                  >
                    {lengthArray.map(item => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <ul
                className="is-flex
                is-flex-direction-column
                is-align-items-center
                mb-5"
              >
                {filteredGoods.map(good => (
                  <li
                    className="m-2"
                    key={good}
                  >
                    <h3 className="title is-4">{good}</h3>
                  </li>
                ))}
              </ul>

              <div className="buttons level">
                <button
                  className="button is-info"
                  type="button"
                  onClick={this.reverseGoods}
                >
                  Reverse
                </button>
                <button
                  className="button is-link"
                  type="button"
                  onClick={this.sortAlphabetically}
                >
                  Sort alphabetically
                </button>
                <button
                  className="button is-link"
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  className="button is-danger"
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>

              <div className="App__hide ">
                <button
                  className="button is-danger is-light mb-5"
                  type="button"
                  onClick={this.isVisible}
                >
                  Hide
                </button>
              </div>

            </section>
          )}
      </div>
    );
  }
}

export default App;
