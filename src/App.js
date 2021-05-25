import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    isVisible: false,
  }

  showList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {isVisible
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.showList}
            >
              Start
            </button>
          )
        }
      </>
    );
  }
}

export default App;
