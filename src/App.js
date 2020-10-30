import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Buttons } from './components/Buttons';
import { GoodsList } from './components/GoodsList';

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

  render() {
    const { isListVisible, goods } = this.state;

    return (
      <div className="App">
        {
          isListVisible
            ? (
              <button
                className="ui positive button"
                type="button"
                onClick={this.start}
              >
                Start
              </button>
            )
            : ''
        }

        <div
          hidden={isListVisible}
        >
          <h1>Goods</h1>
          <GoodsList goods={goods} />

          <Buttons
            sortAlphabetically={this.sortAlphabetically}
            sortByLength={this.sortByLength}
            reverse={this.reverse}
            reset={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default App;
