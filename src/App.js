import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { List } from './components/List';

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
    showList: false,
    // initialGoods: goodsFromServer,
    isReversed: false,
    // eslint-disable-next-line react/no-unused-state
    sortBy: '',
  }

  start = () => {
    this.setState(state => ({
      showList: !state.showList,
    }));
  }

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortBYABC = () => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      sortBy: 'name',
    });
  }

  sortByLength = () => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      sortBy: 'length',
    });
  }

  resetGoods = () => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      sortBy: '',
      isReversed: false,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.showList || (
          <Button
            className={this.state.showList ? 'show' : 'hide'}
            onClick={this.start}
            text={this.state.showList ? 'Hide me' : 'Show Me'}
          />
        )}
        {this.state.showList && (
          <>
            <List list={goodsFromServer} state={this.state} />
            <div className="button-container">
              <Button
                className="reset"
                onClick={this.resetGoods}
                text="Reset Me"
              />
              <Button
                className="sort--ABC"
                onClick={this.sortBYABC}
                text="Sort Me ABC"
              />
              <Button
                className="sort--length"
                onClick={this.sortByLength}
                text="Sort Me by My length"
              />
              <Button
                className="reverse"
                onClick={this.reverseGoods}
                text="Reverse Me"
              />
            </div>

          </>
        )}
      </div>
    );
  }
}

export default App;
