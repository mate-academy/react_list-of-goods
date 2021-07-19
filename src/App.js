import React from 'react';
import { Start } from './components/Start/Start';
import { GoodsList } from './components/GoodsList/GoodsList';
import { ListManipulator } from './components/ListManipulator/ListManipulator';
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

class App extends React.PureComponent {
  state = {
    isStarted: false,
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
    nameIsLongerThan: 1,
    lengthOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }

  start() {
    this.setState({
      isStarted: true,
    });
  }

  reset() {
    this.setState({
      isReversed: false,
      sortBy: '',
      nameIsLongerThan: 1,
    });
  }

  reverse() {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  filterByLength(length) {
    this.setState({
      nameIsLongerThan: length,
    });
  }

  sortByName() {
    this.setState({
      sortBy: 'name',
    });
  }

  sortByLength() {
    this.setState({
      sortBy: 'length',
    });
  }

  render() {
    return (
      <div className="App">
        {(this.state.isStarted
          ? (
            <>
              <GoodsList {...this.state} />
              <ListManipulator
                reset={() => {
                  this.reset();
                }}
                reverse={() => {
                  this.reverse();
                }}
                sortByName={() => {
                  this.sortByName();
                }}
                sortByLength={() => {
                  this.sortByLength();
                }}
                filterByLength={(length) => {
                  this.filterByLength(length);
                }}
                lengthOptions={this.state.lengthOptions}
                lengthFilterBy={this.state.nameIsLongerThan}
              />
            </>
          )
          : (
            <Start start={() => {
              this.start();
            }}
            />
          )
        )}
      </div>
    );
  }
}

export default App;
