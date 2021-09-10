import React from 'react';
import { GoodList } from './component/GoodList';
import './App.scss';

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
  visibleGoodList: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    visibleGoodList: false,
  };

  showList = () => {
    this.setState({
      visibleGoodList: true,
    });
  };

  render() {
    const { visibleGoodList } = this.state;

    return (
      <div className="App">
        <h1 className="goods__title">Goods</h1>
        {!visibleGoodList
          ? (
            <button
              type="button"
              onClick={this.showList}
              className="goods__start"
            >
              Start
            </button>
          )
          : <GoodList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
