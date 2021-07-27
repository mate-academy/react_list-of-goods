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
    isListVisible: false,
  }

  showGoodsList = () => {
    this.setState({
      isListVisible: true,
    });
  }

  reverseGoodsList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByName = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((good1, good2) => good1.localeCompare(good2)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((good1, good2) => good1.length - good2.length),
    }));
  }

  resetGoodsList = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.isListVisible
          && (
          <Button
            title="Start"
            onClick={this.showGoodsList}
          />
          )
        }
        <div className={!this.state.isListVisible && 'invisibleList'}>
          <GoodsList goods={this.state.goods} />
          <Button
            title="Reverse"
            onClick={this.reverseGoodsList}
          />
          <Button
            title="Sort by Name"
            onClick={this.sortByName}
          />
          <Button
            title="Sort by length"
            onClick={this.sortByLength}
          />
          <Button
            title="Reset"
            onClick={this.resetGoodsList}
          />
        </div>
      </div>
    );
  }
}

export default App;
