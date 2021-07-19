
import React from 'react';
import './App.css';
import GoodsList from './Components/GoodList/GoodsList';

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
    isActive: false,
    allGoods: [...goodsFromServer],
  }

  showUI = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  }

  render() {
    const { isActive, allGoods } = this.state;

    return (
      <>
        {!isActive
          && <button type="button" onClick={this.showUI}>Start</button>}
        {isActive
          && (
          <GoodsList
            allGoods={allGoods}
          />
          )}
      </>
    );
  }
}

export default App;
