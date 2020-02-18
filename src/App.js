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
    visibility: true,
  }

  visibilityOfListHandler = () => {
    this.setState(prevState => ({
      visibility: !prevState.visibility,
    }));
  }

  render() {
    const { visibility } = this.state;

    return visibility
      ? (
        <LoadButton
          hidden={!visibility}
          onClick={this.visibilityOfListHandler}
        />
      ) : (
        <div className="App">
          <GoodsList goods={goodsFromServer} visibility={visibility} />
        </div>
      );
  }
}

export default App;
