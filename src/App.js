import React from 'react';
import { StartButton } from './components/StartButton';
import { GoodsList } from './components/GoodsList';
import './App.scss';

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
    isStartVisible: true,
  }

  showList = () => {
    this.setState({
      isStartVisible: false,
    });
  }

  render() {
    const { isStartVisible } = this.state;

    return (
      <div className="App">
        {isStartVisible
          ? <StartButton showList={this.showList} />
          : <GoodsList goods={goodsFromServer} />
        }
      </div>
    );
  }
}

export default App;
