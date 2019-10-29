import React from 'react';
import GoodsList from './GoodsList';

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
    isStartBtnActive: true,
  };

  handleStart = () => {
    this.setState({
      isStartBtnActive: false,
    });
  };

  render() {
    if (this.state.isStartBtnActive) {
      return (
        <button type="button" onClick={this.handleStart}>Start</button>
      );
    }

    return <GoodsList goods={goodsFromServer} />;
  }
}

export default App;
