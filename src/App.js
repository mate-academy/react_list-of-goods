import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    isActiveButton: false,
  }

  handleToggle = () => {
    this.setState(state => ({
      isActiveButton: !state.isActiveButton,
    }));
  }

  render() {
    const { isActiveButton } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        Total amount:
        {' '}
        {goodsFromServer.length}
        <div className="goods">
          {isActiveButton ? (
            <>
              <button type="button" onClick={this.handleToggle}>Hide</button>
              <div className="list">
                <GoodsList
                  goods={goodsFromServer}
                  active={isActiveButton}
                />
              </div>
            </>
          ) : (
            <>
              <button type="button" onClick={this.handleToggle}>Show</button>
              <div className="list">
                <GoodsList
                  goods={goodsFromServer}
                  active={isActiveButton}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
