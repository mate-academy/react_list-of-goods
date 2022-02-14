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

interface State {
  visible: boolean,
  allGoods: string[],
  filteredGoods: string[],
  sortBy: string,
}

class App extends React.Component<{}, State> {
  state = {
    visible: false,
    allGoods: goodsFromServer,
    filteredGoods: [...goodsFromServer],
    sortBy: 'default',
  };

  getStart = () => {
    this.setState(() => ({
      visible: true,
    }));
  };

  reset = () => {
    const defaultArray = this.state.allGoods;

    this.setState(() => ({
      visible: false,
      filteredGoods: [...defaultArray],
      sortBy: 'default',
    }));
  };

  sortByAlfa = () => {
    this.setState(() => ({
      sortBy: 'alfa',
    }));
  };

  sortByLeng = () => {
    this.setState(() => ({
      sortBy: 'length',
    }));
  };

  render() {
    const { visible, filteredGoods, sortBy } = this.state;

    filteredGoods.sort((f1, f2) => {
      switch (sortBy) {
        case 'alfa':
          return f1.localeCompare(f2);
          break;
        case 'length':
          return f1.length - f2.length;
        default:
          return 0;
      }
    });
    const buttonStyle = 'waves-effect waves-light btn-small';

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Goods</h1>
          <div className="wrap">
            <button
              type="button"
              className={buttonStyle}
              onClick={this.getStart}
            >
              Start
            </button>
            <button
              type="button"
              className={buttonStyle}
              onClick={this.sortByAlfa}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className={buttonStyle}
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              className={buttonStyle}
              onClick={this.sortByLeng}
            >
              Sort by length
            </button>
          </div>
          {visible
            && (
              <ul>
                {filteredGoods.map((good) => {
                  return (
                    <li key={good}>
                      {good}
                    </li>
                  );
                })}
              </ul>
            )}
        </div>
      </div>
    );
  }
}

export default App;
