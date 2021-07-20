import React from 'react';
import './App.css';
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

export class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isListShown: false,
  }

  showGoodsList = () => {
    this.setState({
      isListShown: true,
    });
  }

  reverseGoodsList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
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

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    return (
      <div className="App">
        <Button
          title="Start"
          onClick={this.showGoodsList}
          isHidden={this.state.isListShown}
        />
        <div className={!this.state.isListShown && 'hiddenList'}>
          <ul>
            {this.state.goods.map(good => (
              <li key="good">
                {good}
              </li>
            ))}
          </ul>
          <Button
            title="Reverse"
            onClick={this.reverseGoodsList}
          />
          <Button
            title="Sort Alphabetically"
            onClick={this.sortAlphabetically}
          />
          <Button
            title="Sort by length"
            onClick={this.sortByLength}
          />
          <Button
            title="Reset"
            onClick={this.reset}
          />
        </div>
      </div>
    );
  }
}
