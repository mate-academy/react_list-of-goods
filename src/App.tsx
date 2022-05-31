import { Component } from 'react';
import './App.css';
import GoodsList from './GoodsList/GoodsList';

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

type State = {
  isListVisible:boolean;
};

class App extends Component<Props, State> {
  state = {
    isListVisible: false,
  };

  start = () => {
    this.setState(state => {
      return {
        isListVisible: !state.isListVisible,
      };
    });
  };

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {isListVisible && <GoodsList goods={goodsFromServer} />}
        {!isListVisible
        && (<button type="button" onClick={this.start}>Start</button>)}
      </div>
    );
  }
}

export default App;
