import React from 'react';
import './App.css';
import { Content } from './components/Content';
import { StartButton } from './components/StartButton';
import 'semantic-ui-css/semantic.min.css';

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

const preparedGoodsList = goodsFromServer.map((item, index) => ({
  name: item,
  id: index,
}));

class App extends React.Component {
  state = {
    listVisible: false,
  }

  showGoodsList = () => {
    this.setState(state => ({
      listVisible: !state.listVisible,
    }));
  }

  render() {
    const {
      listVisible,
    } = this.state;

    return (
      <div className="App">
        {!listVisible
          ? <StartButton showGoodsList={this.showGoodsList} />
          : <Content goodsList={preparedGoodsList} />
        }
      </div>
    );
  }
}

export default App;
