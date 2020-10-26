import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

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
    visibleList: false,
  }

  showList = () => {
    this.setState(prevState => ({
      visibleList: !prevState.visibleList,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  toDefaultList = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (a.length - b.length)),
    }));
  }

  render() {
    const { goods, visibleList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
        {
          !visibleList && (
            <div>
              <Button text="Start" callback={this.showList} />
            </div>
          )
        }
        {
          visibleList && (
            <div>
              <GoodsList goods={goods} />
              <p>
                <Button text="Reverse" callback={this.reverseList} />
                <Button
                  text="Sort alphabetically"
                  callback={this.sortAlphabetList}
                />
                <Button text="Reset" callback={this.toDefaultList} />
                <Button text="Sort by length" callback={this.sortByLength} />
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
