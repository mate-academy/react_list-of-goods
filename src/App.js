import React from 'react';
import './App.css';

import LoadButton from './LoadButton/LoadButton';
import GoodsList from './GoodsList/GoodsList';

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
    isLoaded: true,
  }

  visibilityOfListHandler = () => {
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }));
  }

  render() {
    const { isLoaded } = this.state;

    return isLoaded
      ? (
        <LoadButton
          onClick={this.visibilityOfListHandler}
        />
      ) : (
        <div className="app">
          <GoodsList goods={goodsFromServer} />
        </div>
      );
  }
}

export default App;
