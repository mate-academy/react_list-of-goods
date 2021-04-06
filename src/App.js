import React from 'react';
import './App.css';
import { Goods } from './Goods';
import { Buttons } from './Buttons';

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

export class App extends React.Component {
  state = {
    buttonHide: false,
    isReversed: false,
    sortBy: '',
    reset: false,
  }

  showButton = () => {
    this.setState({
      buttonHide: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      reset: false,
    }));
  }

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
      reset: false,
    });
  }

  reset = () => {
    this.setState({
      reset: true,
      isReversed: false,
      sortBy: '',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      reset: false,
    });
  }

  render() {
    const { buttonHide, isReversed, sortBy, reset } = this.state;
    let copyGoods = [...goodsFromServer];

    copyGoods.sort((itemA, itemB) => {
      switch (sortBy) {
        case 'alphabet':
          return itemA.localeCompare(itemB);
        case 'length':
          return itemA.length - itemB.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    if (reset) {
      copyGoods = [...goodsFromServer];
    }

    return (
      <div className="App">
        {buttonHide
          ? (
            <>
              <Buttons
                reverse={this.reverse}
                sortByAlphabet={this.sortAlphabetically}
                sortByLength={this.sortByLength}
                reset={this.reset}
              />
              <Goods goods={copyGoods} />
            </>
          )
          : (
            <button className="button" type="button" onClick={this.showButton}>
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
