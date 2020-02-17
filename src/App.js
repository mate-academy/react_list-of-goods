import React from 'react';
import './App.css';
import { GoodsList } from './component/GoodsList/GoodsList';

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
    renderList: false,
  };

  renderGoodList = () => {
    this.setState({
      renderList: true,
    });
  };

  render() {
    return (
      <div>
        <h1>GoodList</h1>
        {
          this.state.renderList
            ? <GoodsList goodsFromServer={goodsFromServer} />
            : <button type="button" onClick={this.renderGoodList}>Start</button>
        }
      </div>
    );
  }
}
