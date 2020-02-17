import React from 'react';
import './App.css';
import Goodslist from './components/Goodslist/Goodslist';

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
  state={
    visible: true,
  }

  visibleList = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          hidden={!visible}
          onClick={this.visibleList}
        >
          Start
        </button>
        <Goodslist list={goodsFromServer} visible={visible} />
      </div>
    );
  }
}

export default App;
