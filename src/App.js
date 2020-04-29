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

  showContent = () => {
    this.setState({
      isActiveButton: true,
    });
  }

  hideContent = () => {
    this.setState({
      isActiveButton: false,
    });
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
              <button type="button" onClick={this.hideContent}>Hide</button>
              <div className="list">
                <GoodsList
                  goods={goodsFromServer}
                  active={isActiveButton}
                />
              </div>
            </>
          ) : (
            <>
              <button type="button" onClick={this.showContent}>Show</button>
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
