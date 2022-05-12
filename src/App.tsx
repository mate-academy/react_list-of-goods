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
  goods: string[],
  isStartOnClick: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStartOnClick: false,
  };

  render() {
    const { goods, isStartOnClick } = this.state;

    return isStartOnClick ? (
      <div>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={() => (
            this.setState({ goods: [...goods].reverse() })
          )}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={() => (
            this.setState({
              goods: [...goods].sort((a, b) => (
                a.localeCompare(b)
              )),
            })
          )}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={() => (
            this.setState({ goods: goodsFromServer })
          )}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={() => (
            this.setState({
              goods: [...goods].sort((a, b) => (
                a.length - b.length
              )),
            })
          )}
        >
          Sort by length
        </button>

        <ol>
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ol>
      </div>
    ) : (
      <button
        type="button"
        onClick={() => (
          this.setState({ isStartOnClick: true })
        )}
      >
        Start
      </button>
    );
  }
}

export default App;
