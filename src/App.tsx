import React from 'react';
import { StartPage } from './components/StartPage/StartPage';
import { GoodsList } from './components/GoodsList/GoodsList';

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

interface State {
  startPageStatus: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    startPageStatus: true,
  };

  changeStartPageStatus = () => {
    this.setState(state => ({
      startPageStatus: !state.startPageStatus,
    }));
  };

  render() {
    const { startPageStatus } = this.state;

    return (
      <div className="App">
        {startPageStatus
          ? <StartPage handler={this.changeStartPageStatus} />
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
