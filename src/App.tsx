import React from 'react';
import './App.scss';
import { List } from './components/List';

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
      <div className="app">
        <h1 className="app__header">Goods</h1>

        {isVisible && <List goodsList={goodsFromServer} />}

        <button
          type="button"
          onClick={this.showList}
          className={`show-button ${isVisible && 'show-button--hide'}`}
        >
          Start
        </button>
      </div>
    );
  }
}

export default App;
