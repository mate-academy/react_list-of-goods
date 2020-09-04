import React from 'react';
import './App.css';
import { List } from './List';

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
    listVisibility: false,
  }

  makeVisible = () => {
    this.setState({
      listVisibility: true,
    });
  }

  render() {
    return (
      <div>
        {!this.state.listVisibility && (
          <button
            className="button"
            type="button"
            onClick={this.makeVisible}
          >
            Start
          </button>
        )}
        {this.state.listVisibility && (
          <List goods={goodsFromServer} />
        )}
      </div>
    );
  }
}
