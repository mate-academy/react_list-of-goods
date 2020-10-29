import React from 'react';
import './App.css';

import { StartButton } from './components/StartButton';
import { GoodList } from './components/GoodsList';

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
    listVisibility: false,
  }

  enter = (isVisible) => {
    this.setState({ listVisibility: isVisible });
  }

  render() {
    const { listVisibility } = this.state;

    return (
      <div className="wrapper">
        <h1>Goods List</h1>

        {listVisibility
          ? (
            <GoodList
              goodsList={goodsFromServer}
              goodsFromServer={goodsFromServer}
            />
          )
          : (
            <StartButton
              listVisibility={listVisibility}
              enter={this.enter}
            />
          )
        }
      </div>
    );
  }
}

export default App;
