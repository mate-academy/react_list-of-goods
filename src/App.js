import React from 'react';
import './App.css';
import { List } from './components/List/List';
import { Buttons } from './components/Buttons';

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

const preparedGoodsFromServer = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

class App extends React.Component {
  state = {
    isListVisible: true,
    goods: preparedGoodsFromServer,
  }

  start = () => {
    this.setState({
      isListVisible: false,
    });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  reset = () => {
    this.setState({
      goods: preparedGoodsFromServer,
    });
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.localeCompare(b.name)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.length - b.name.length
      )),
    }));
  }

  render() {
    const { isListVisible, goods } = this.state;

    return (
      <div className="App">
        <div>
          <button
            className="button"
            type="button"
            hidden={!isListVisible}
            onClick={this.start}
          >
            Start
          </button>
          <div
            hidden={isListVisible}
          >
            <Buttons
              reverse={this.reverse}
              reset={this.reset}
              sortAlphabetically={this.sortAlphabetically}
              sortByLength={this.sortByLength}
            />
            <List goods={goods} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
