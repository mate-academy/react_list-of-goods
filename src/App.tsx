import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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

type StateApp = {
  isVisible: boolean;
};

class App extends React.Component<{}, StateApp> {
  state = {
    isVisible: false,
  };

  showList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isVisible && (
          <GoodsList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
