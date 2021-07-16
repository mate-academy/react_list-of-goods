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

    const lengthSelector = document.querySelector('#lengthSelector');

    lengthSelector.value = 1;
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
              <ListManipulator app={this} />
            </>
          )
          : <Start app={this} start={this.start} />
        )}
      </div>
    );
  }
}

export default App;
