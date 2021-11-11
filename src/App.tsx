import React from 'react';
import { GoodsList } from './components/GoodsList';
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

type Props = {};

interface State {
  goods: string[];
  isVisible: boolean;
}

class App extends React.PureComponent<Props, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
  };

  activeList = (): void => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.isVisible && <GoodsList goods={[...this.state.goods]} />}

        <button
          className="App__button"
          type="button"
          onClick={this.activeList}
        >
          Start
        </button>
      </div>
    );
  }
}

export default App;
