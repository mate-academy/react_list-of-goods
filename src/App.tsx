import React from 'react';
import { GoodsList } from './components/GoodsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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

const preparedGoods = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

type State = {
  isVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
  };

  showList = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {isVisible
          ? <GoodsList preparedGoods={preparedGoods} />
          : (
            <button
              className="position-absolute top-50 start-50"
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
