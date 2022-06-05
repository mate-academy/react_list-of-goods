import classNames from 'classnames';
import React from 'react';
import './App.scss';

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
  visibleStart: boolean,
  resetGoods: string[],
  goods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    visibleStart: false,
    resetGoods: [...goodsFromServer],
    goods: [...goodsFromServer],
  };

  render() {
    const { visibleStart, goods } = this.state;

    return (
      <div className="good">
        <div className="container">
          <h1 className="good__title title is-3">List of goods</h1>
          <button
            type="button"
            onClick={() => (this.setState({ visibleStart: true }))}
            className={classNames(
              'button is-warning good__start-button is-medium',
              {
                'is-hidden': visibleStart === true,
              },
            )}
          >
            Start
          </button>
          <div className="good__list-block">
            {visibleStart && (
              <>
                <ul className="good__list">
                  {goods.map(good => (
                    <li
                      key={good}
                      className="good__item subtitle is-3"
                    >
                      {good}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => this.setState(state => ({
                    goods: state.goods.reverse(),
                  }))}
                  className="button is-warning is-medium"
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={() => this.setState(state => ({
                    goods: state.goods.sort((good1, good2) => (
                      good1.localeCompare(good2)
                    )),
                  }))}
                  className="button is-warning is-medium"
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={() => this.setState((state) => ({
                    goods: state.resetGoods,
                  }))}
                  className="button is-warning is-medium"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => this.setState(state => ({
                    goods: state.goods.sort((good1, good2) => (
                      good1.length - good2.length
                    )),
                  }))}
                  className="button is-warning is-medium"
                >
                  Sort by length
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
