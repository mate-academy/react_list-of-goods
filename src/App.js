import React from 'react';
import GoodsList from './components/GoodsList/Goodslist';

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
    isReady: false,
  }

  onStart = () => {
    this.setState({
      isReady: true,
    });
  }

  render() {
    const { isReady } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isReady
          ? (<GoodsList goodsList={goodsFromServer} />)
          : (
            <button
              type="button"
              onClick={() => this.onStart(true)}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
