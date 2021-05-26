import React from 'react';
import './App.css';

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
    goods: goodsFromServer,
    isClicked: false,
    isReversed: false,
    isSorted: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  };

  sortByAlphabet = () => {
    this.setState({
      isSorted: true,
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      isSorted: true,
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
    });
  };


  render() {
    const { goods, isClicked, isReversed, isSorted,sortBy } = this.state;
    const goodsForDisply = [...goods];

    if (isSorted) {
      goodsForDisply.sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);
          
          case 'length':
            return a.length - b.length;
        
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      goodsForDisply.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isClicked 
          ? (
          <>
            <button onClick={this.reverse}>
              Reverse
            </button>
            <button onClick={this.sortByAlphabet}>
              Sort alphabetically
            </button>
            <button onClick={this.sortByLength}>
              Sort by length
            </button>
            <button onClick={this.reset}>
              Reset
            </button>
            <ul>
            {goodsForDisply.map(good => (
              <li>
                {good}
              </li>
            ))}
            </ul>
          </>
        ) : (
          <button onClick={() => this.setState({
            isClicked: true,
          })}>
            Start
          </button>
        )
        }
    </div>
    )
  }
};

export default App;
