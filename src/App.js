import React from 'react';
import './App.css';

import { GoodsList } from './ components/GoodsList';
import { Button } from './ components/Button';

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
    isVissibleList: false,
  }

  toggleSwitchList = () => {
    this.setState(prevState => ({
      isVissibleList: !prevState.isVissibleList,
    }));
  }

  render() {
    const { isVissibleList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <Button onClick={this.toggleSwitchList} text="Show / Hide List" />
        {
          isVissibleList && <GoodsList goods={goodsFromServer} />
        }
      </div>
    );
  }
}
