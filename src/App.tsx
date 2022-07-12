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
  isVisible: boolean,
  goodsList: string[],
};

class App extends React.Component <{}, State> {
  state: Readonly <State> = {
    isVisible: false,
    goodsList: [...goodsFromServer],
  };

  visabilityToggle = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  };

  reset = () => {
    this.setState({ goodsList: [...goodsFromServer] });
  };

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { isVisible, goodsList } = this.state;

    return (
      <div className="is-fluid">
        {
          isVisible
            ? (
              <div className="box is-medium ">
                <h1 className="title">Goods:</h1>
                <ul className="Goods__list content is-medium">
                  {goodsList.map(
                    good => (
                      <li key={good} className="box is-small">
                        {good}
                      </li>
                    ),
                  )}
                  {' '}
                </ul>
                <button
                  type="button"
                  className="button is-primary button__main"
                  onClick={this.sortAlphabetically}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-info button__main"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  className="button is-warning button__main"
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-danger button__main"
                  onClick={this.reset}
                >
                  Reset
                </button>

              </div>
            )
            : (
              <div className="button__wrapper">
                <button
                  className="button is-success button__start"
                  type="button"
                  onClick={this.visabilityToggle}
                >
                  Start
                </button>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
