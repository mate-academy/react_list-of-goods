import React from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods';

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
    goodsList: [...goodsFromServer],
    appStarted: false,
    isReverse: false,
    sorting: 'default',
  }

  setVisible = () => {
    this.setState(state => ({
      appStarted: !state.appStarted,
    }));
  }

  makeReverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  alphabetSort = () => {
    this.setState({ sorting: 'alphabet' });
  }

  lengthSort = () => {
    this.setState({ sorting: 'length' });
  }

  reset = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      sorting: 'default',
      isReverse: false,
    });
  }

  render() {
    const {
      appStarted,
      sorting,
      isReverse,
      goodsList,
    } = this.state;

    goodsList.sort((a, b) => {
      switch (sorting) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReverse) {
      goodsList.reverse();
    }

    return (
      <div className="App">

        <h1>Goods</h1>
        {!appStarted
          ? (
            <button
              type="button"
              onClick={this.setVisible}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={this.makeReverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.alphabetSort}
              >
                Sort by alphabet
              </button>

              <button
                type="button"
                onClick={this.lengthSort}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <ListOfGoods goodsArr={goodsList} />
            </>
          )
        }

      </div>
    );
  }
}

export default App;
