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

type Props = {};

type State = {
  goods: string[],
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.PureComponent<Props, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  preparedGoods = () => {
    const { goods, isReversed, sortBy } = this.state;
    const preparedGoods: string[] = [...goods];

    if (isReversed) {
      preparedGoods.reverse();
    }

    switch (sortBy) {
      case 'alphabet':
        return preparedGoods.sort((good1, good2) => good1.localeCompare(good2));
      case 'length':
        return preparedGoods.sort((good1, good2) => good1.length - good2.length);
      default:
        break;
    }

    return preparedGoods;
  };

  startClick = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortBy = (value: string) => {
    this.setState({ sortBy: value });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Goods</h1>
        {!this.state.isVisible && (
          <button
            className="app__button app__button-start"
            type="button"
            onClick={this.startClick}
          >
            Start
          </button>
        )}
        {this.state.isVisible && (
          <>
            <ul>
              {this.preparedGoods().map(good => (
                <li key={good}>{good}</li>
              ))}
            </ul>
            <button
              className="app__button app__button-action"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              className="app__button app__button-action"
              type="button"
              onClick={() => this.sortBy('alphabet')}
            >
              Sort alphabetically
            </button>

            <button
              className="app__button app__button-action"
              type="button"
              onClick={() => this.sortBy('length')}
            >
              Sort by length
            </button>

            <button
              className="app__button app__button-reset"
              type="button"
              onClick={() => this.reset()}
            >
              Reset
            </button>

          </>

        )}

      </div>
    );
  }
}

export default App;
