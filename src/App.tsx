import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
  visibilityStyleGoodsList: string;
  visibilityStyleButton: string;
}

class App extends React.Component<{}, State> {
  state = {
    visibilityStyleGoodsList: 'hide',
    visibilityStyleButton: 'show',
  };

  showGoodList = () => {
    this.setState({
      visibilityStyleGoodsList: 'show',
      visibilityStyleButton: 'hide',
    });
  };

  render() {
    const { visibilityStyleGoodsList, visibilityStyleButton } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className={`btn btn-info ${visibilityStyleButton}`}
          type="submit"
          onClick={this.showGoodList}
        >
          Start
        </button>
        <div className={visibilityStyleGoodsList}>
          <GoodsList goodsFromServer={goodsFromServer} />
        </div>
      </div>
    );
  }
}

export default App;
