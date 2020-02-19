import React, { Component } from 'react';
import './App.css';
import { GoodList } from './components/GoodList/GoodList';

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

export class App extends Component {
  state = {
    isShown: false,
  }

  showClick = () => {
    this.setState({
      isShown: true,
    });
  }

  render() {
    const { isShown } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isShown
          ? (<GoodList goodList={goodsFromServer} />)
          : (
            <button
              type="button"
              onClick={this.showClick}
            >
            Start
            </button>
          )}
      </div>
    );
  }
}
