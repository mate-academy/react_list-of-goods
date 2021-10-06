import React from 'react';
import './App.css';
import { GoodsList } from './Component/GoodsList';

const goodsFromServer: string[] = [
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

type State = {
  goodsArr: string[],
  showList: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goodsArr: goodsFromServer,
    showList: false,
  };

  showListed = () => {
    this.setState((prevState) => (
      { showList: !prevState.showList }
    ));
  };

  render() {
    const {
      goodsArr,
      showList,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!showList && (
          <button
            type="button"
            className="button"
            onClick={this.showListed}
          >
            Start
          </button>
        )}
        {showList && (
          <GoodsList listGoods={goodsArr} />
        )}
      </div>
    );
  }
}

export default App;
