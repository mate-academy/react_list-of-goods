import React from 'react';
import './App.css';
import { Good } from './components/Good';
import { GoodList } from './components/GoodList';

const goodsFromServer: Good[] = [
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
  isVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: false,
  };

  showList = () => {
    this.setState({
      isVisible: true,
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {!isVisible && (
          <button type="button" onClick={this.showList}>start</button>
        )}

        {isVisible && (
          <>
            <h1>Goods</h1>
            <div>
              <GoodList goods={goodsFromServer} />
            </div>
          </>
        )}
      </>
    );
  }
}

export default App;
