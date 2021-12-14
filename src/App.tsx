import React from 'react';
import './App.css';

type State = {
  goods: string[]
};

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

class App extends React.PureComponent<{}, State> {
  state = {
    goods: [...goodsFromServer],
  };

  reverseList = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
    // eslint-disable-next-line no-console
    console.log('reversed');
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>
        <ul className="goodList">
          {goods.map((good) => (
            <li
              key={good}
              className="goodList__item"
            >
              <span>{good}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
