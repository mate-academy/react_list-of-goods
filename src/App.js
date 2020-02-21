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
    isLoaded: false,
  }

  showClick = () => {
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isLoaded
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
