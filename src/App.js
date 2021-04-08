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
    copyGoods: [...goodsFromServer],

  }

  showButton = () => {
    this.setState({
      buttonHide: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      copyGoods: state.copyGoods.reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      copyGoods: state.copyGoods.sort(
        (itemA, itemB) => itemA.localeCompare(itemB),
      ),
    }));
  }

  reset = () => {
    this.setState({
      copyGoods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      copyGoods: state.copyGoods.sort(
        (itemA, itemB) => itemA.length - itemB.length,
      ),
    }));
  }

  render() {
    const { buttonHide, copyGoods } = this.state;

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
