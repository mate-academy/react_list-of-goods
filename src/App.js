import React from 'react';

import { GoodsList } from './components/GoodsList';
import { Buttons } from './components/Buttons';

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

const preparedGoods = goodsFromServer.map(good => ({
  name: good,
  id: good,
}));

class App extends React.PureComponent {
  state = {
    preparedGoods,
    isListVisible: false,
    isListReversed: false,
    sortBy: '',
    lengthLimit: 1,
  }

  showList = () => {
    this.setState(state => ({
      isListVisible: !state.isListVisible,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      isListReversed: !state.isListReversed,
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      isListReversed: false,
      sortBy: 'name',
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      isListReversed: false,
      sortBy: 'length',
    }));
  }

  selectByLength = (event) => {
    this.setState({
      lengthLimit: event.target.value,
    });
  }

  reset = () => {
    this.setState({

      isListVisible: true,
      isListReversed: false,
      sortBy: '',
      lengthLimit: 1,
    });
  }

  render() {
    const {
      lengthLimit,
      sortBy,
      isListVisible,
      isListReversed,
    } = this.state;

    const visibleGoods = this.state.preparedGoods.filter(
      good => (good.name.length >= lengthLimit),
    );

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'name':
          return good1[sortBy].localeCompare(good2[sortBy]);

        case 'length':
          return good1.name.length - good2.name.length;

        default:
          return 0;
      }
    });

    if (isListReversed) {
      visibleGoods.reverse();
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App card w-50 font-weight-bolder">
        <div>
          {isListVisible
            ? (
              <div>
                <h1 className="card-header text-center">Goods</h1>
                <GoodsList
                  goods={visibleGoods}
                />
                <Buttons
                  reverseList={this.reverseList}
                  sortByName={this.sortByName}
                  sortByLength={this.sortByLength}
                  selectByLength={this.selectByLength}
                  reset={this.reset}
                  numbers={numbers}
                  lengthLimit={lengthLimit}
                />
              </div>
            )
            : (
              <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
                onClick={this.showList}
              >
                Start
              </button>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
