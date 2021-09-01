import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';

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

const preparedGoods: Good[] = goodsFromServer.map(good => (
  {
    name: good,
    id: uuidv4(),
  }
));

interface State {
  goods: Good[];
  isListVisible: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: preparedGoods,
    isListVisible: false,
  };

  showList = () => {
    this.setState((prevState) => ({
      isListVisible: !prevState.isListVisible,
    }));
  };

  render() {
    const { isListVisible, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isListVisible
          ? <GoodsList goods={goods} />
          : (
            <button
              className="button"
              type="button"
              onClick={this.showList}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
